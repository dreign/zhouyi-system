// AI 导出模块 - 将命理数据导出为 AI 友好的 JSON 格式

import { ExtendedBaziAnalysis } from './bazi';
import { ZiweiPlate, BRIGHTNESS_LABELS } from './ziwei';
import { DestinyCase } from './case';

export interface BaziAiExport {
  schema_version: string;
  input: {
    calendar_type: string;
    solar_input: {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
    };
    lunar_input?: {
      year: number;
      month: string;
      day: number;
      hour: number;
      minute: number;
      second: number;
      is_leap: boolean;
    };
    location: {
      longitude: number;
      latitude: number;
    };
    timezone: number;
    gender: string;
  };
  calc_settings: {
    use_true_solar_time: boolean;
    rat_hour_mode: string;
    si_ling_version: string;
    da_yun_algorithm: string;
    earth_palace_algorithm: string;
  };
  natal_chart: {
    year_pillar: {
      display: string;
      gan: { code: string; label: string };
      zhi: { code: string; label: string };
      na_yin?: { code: string; label: string };
    };
    month_pillar: {
      display: string;
      gan: { code: string; label: string };
      zhi: { code: string; label: string };
      na_yin?: { code: string; label: string };
    };
    day_pillar: {
      display: string;
      gan: { code: string; label: string };
      zhi: { code: string; label: string };
      na_yin?: { code: string; label: string };
    };
    hour_pillar: {
      display: string;
      gan: { code: string; label: string };
      zhi: { code: string; label: string };
      na_yin?: { code: string; label: string };
    };
    day_master: { code: string; label: string };
  };
  extra_pillars: {
    ming_gong?: { display: string; gan: string; zhi: string };
    shen_gong?: { display: string; gan: string; zhi: string };
    tai_yuan?: { display: string; gan: string; zhi: string };
    tai_xi?: { display: string; gan: string; zhi: string };
    si_ling?: {
      display: string;
      gan: string;
      origin: string;
      days_since_jie: number;
      month_zhi: string;
    };
  };
  fortune: {
    qi_yun?: {
      display: string;
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
    };
    direction: string;
    decades: Array<{
      index: number;
      pillar: {
        display: string;
        gan: { code: string; label: string };
        zhi: { code: string; label: string };
        na_yin?: { code: string; label: string };
      };
      start_age: number;
      end_age: number;
      start_time: string;
      end_time: string;
    }>;
  };
  analysis: {
    wuxing_score: Record<string, number>;
    day_main_strength: string;
    yongshen: string[];
    shi_shen_distribution: Record<string, number>;
    wangshuai: {
      level: string;
      description: string;
      suggestion: string;
      score: number;
    };
    comprehensive: {
      destiny: string;
      academic: string;
      wealth: string;
      marriage: string;
      career: string;
      friendship: string;
      personality: string;
      health: string;
      constellation: string;
    };
  };
}

export interface ZiweiAiExport {
  schema_version: string;
  plate_summary: {
    five_element_bureau: string;
    ming_master: string;
    shen_master: string;
  };
  calc_settings: {
    tdr_pan: string;
    brightness_mode: string;
    brightness_labels: Record<string, string>;
    brightness_label_display_map: Record<string, string>;
  };
  palaces: Array<{
    palace: string;
    branch: string;
    stem: string;
    main_stars?: string[];
    assistant_stars?: string[];
    minor_stars?: string[];
    misc_stars?: string[];
    changsheng_12?: string[];
    boshi_12?: string[];
    jiangqian_12?: string[];
    suijian_12?: string[];
    flow_stars?: string[];
  }>;
}

export function exportBaziToAiJson(
  analysis: ExtendedBaziAnalysis,
  caseData: DestinyCase
): string {
  const { bazi, dayMain, wuxingScore, dayMainStrength, yongshen, dayun, wangshuai, analysis: comprehensive } = analysis;
  const { birthInput } = caseData;

  const result: BaziAiExport = {
    schema_version: 'bazi_ai_v2',
    input: {
      calendar_type: birthInput.calendarType,
      solar_input: {
        year: birthInput.year,
        month: birthInput.month,
        day: birthInput.day,
        hour: birthInput.hour,
        minute: birthInput.minute || 0,
        second: birthInput.second || 0,
      },
      location: {
        longitude: birthInput.longitude || 120.0,
        latitude: birthInput.latitude || 30.0,
      },
      timezone: birthInput.timeZone || 8.0,
      gender: caseData.gender,
    },
    calc_settings: {
      use_true_solar_time: birthInput.useTrueSolarTime || true,
      rat_hour_mode: 'noSplit',
      si_ling_version: 'sanMingTongHui',
      da_yun_algorithm: 'precise120',
      earth_palace_algorithm: 'fireEarth',
    },
    natal_chart: {
      year_pillar: _pillarToJson(bazi.year),
      month_pillar: _pillarToJson(bazi.month),
      day_pillar: _pillarToJson(bazi.day),
      hour_pillar: _pillarToJson(bazi.hour),
      day_master: { code: dayMain, label: dayMain },
    },
    extra_pillars: {
      ming_gong: analysis.mingGong ? { display: analysis.mingGong, gan: '', zhi: analysis.mingGong } : undefined,
      tai_yuan: analysis.taiYuan ? { display: `${analysis.taiYuan.gan}${analysis.taiYuan.zhi}`, gan: analysis.taiYuan.gan, zhi: analysis.taiYuan.zhi } : undefined,
    },
    fortune: {
      direction: 'forward',
      decades: dayun ? dayun.map((d, i) => ({
        index: i + 1,
        pillar: {
          display: `${d.gan}${d.zhi}`,
          gan: { code: d.gan, label: d.gan },
          zhi: { code: d.zhi, label: d.zhi },
        },
        start_age: d.startAge,
        end_age: d.endAge,
        start_time: '',
        end_time: '',
      })) : [],
    },
    analysis: {
      wuxing_score: wuxingScore,
      day_main_strength: dayMainStrength,
      yongshen,
      shi_shen_distribution: analysis.shiShenDistribution || {},
      wangshuai: wangshuai || { level: '', description: '', suggestion: '', score: 0 },
      comprehensive: comprehensive || {
        destiny: '',
        academic: '',
        wealth: '',
        marriage: '',
        career: '',
        friendship: '',
        personality: '',
        health: '',
        constellation: '',
      },
    },
  };

  return JSON.stringify(result, null, 2);
}

function _pillarToJson(pillar: { gan: string; zhi: string }): {
  display: string;
  gan: { code: string; label: string };
  zhi: { code: string; label: string };
} {
  return {
    display: `${pillar.gan}${pillar.zhi}`,
    gan: { code: pillar.gan, label: pillar.gan },
    zhi: { code: pillar.zhi, label: pillar.zhi },
  };
}

export function exportZiweiToAiJson(plate: ZiweiPlate): string {
  const palaces: ZiweiAiExport['palaces'] = plate.palaces.map(palace => {
    const palaceJson: ZiweiAiExport['palaces'][number] = {
      palace: palace.name,
      branch: palace.branch,
      stem: palace.stem,
    };

    const mainStars = palace.stars.filter(s => s.type === 'major').map(s => _formatStar(s, palace));
    const assistantStars = palace.stars.filter(s => s.type === 'lucky' || s.type === 'bad').map(s => _formatStar(s, palace));
    const minorStars = palace.stars.filter(s => s.type === 'minor').map(s => _formatStar(s, palace));
    const miscStars = palace.stars.filter(s => s.type === 'other').map(s => _formatStar(s, palace));

    if (mainStars.length > 0) palaceJson.main_stars = mainStars;
    if (assistantStars.length > 0) palaceJson.assistant_stars = assistantStars;
    if (minorStars.length > 0) palaceJson.minor_stars = minorStars;
    if (miscStars.length > 0) palaceJson.misc_stars = miscStars;

    return palaceJson;
  });

  const result: ZiweiAiExport = {
    schema_version: 'ziwei_ai_v3',
    plate_summary: {
      five_element_bureau: plate.fiveElementBureau,
      ming_master: plate.mingZhu,
      shen_master: plate.shenZhu,
    },
    calc_settings: {
      tdr_pan: 'standard',
      brightness_mode: 'builtin',
      brightness_labels: {
        '-1': 'level_none',
        '0': 'level_xian',
        '1': 'level_bu',
        '2': 'level_ping',
        '3': 'level_li',
        '4': 'level_de',
        '5': 'level_wang',
        '6': 'level_miao',
      },
      brightness_label_display_map: {
        'level_none': '',
        'level_xian': '陷',
        'level_bu': '不',
        'level_ping': '平',
        'level_li': '利',
        'level_de': '得',
        'level_wang': '旺',
        'level_miao': '庙',
      },
    },
    palaces,
  };

  return JSON.stringify(result, null, 2);
}

function _formatStar(star: { name: string; code: string; siHua?: Array<{ star: string; type: string }> }, palace: { brightness: Record<string, string> }): string {
  let text = star.name;
  const brightness = palace.brightness[star.name];
  if (brightness && brightness !== 'ping') {
    text += `(${BRIGHTNESS_LABELS[brightness as keyof typeof BRIGHTNESS_LABELS] || brightness})`;
  }
  return text;
}

export function exportCaseToAiJson(caseData: DestinyCase, includeBazi?: ExtendedBaziAnalysis, includeZiwei?: ZiweiPlate): string {
  const result: Record<string, any> = {
    schema_version: 'destiny_case_v1',
    case_id: caseData.id,
    name: caseData.name,
    gender: caseData.gender,
    note: caseData.note,
    created_at: caseData.createdAt,
    updated_at: caseData.updatedAt,
    birth_input: caseData.birthInput,
  };

  if (includeBazi) {
    result['bazi_analysis'] = JSON.parse(exportBaziToAiJson(includeBazi, caseData));
  }

  if (includeZiwei) {
    result['ziwei_analysis'] = JSON.parse(exportZiweiToAiJson(includeZiwei));
  }

  return JSON.stringify(result, null, 2);
}

export function exportMultipleCasesToAiJson(
  cases: Array<{ caseData: DestinyCase; bazi?: ExtendedBaziAnalysis; ziwei?: ZiweiPlate }>
): string {
  const result = {
    schema_version: 'destiny_cases_v1',
    export_time: new Date().toISOString(),
    cases: cases.map(c => JSON.parse(exportCaseToAiJson(c.caseData, c.bazi, c.ziwei))),
  };

  return JSON.stringify(result, null, 2);
}