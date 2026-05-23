// DeepSeek AI服务封装

interface AIResponse {
  content: string;
  tokens: number;
}

async function callDeepSeekAPI(prompt: string, maxTokens: number = 2000): Promise<AIResponse> {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return {
      content: 'AI解读功能需要配置DEEPSEEK_API_KEY环境变量。',
      tokens: 0
    };
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '你是一位精通易经、八字命理和姓名学的资深顾问。请用简洁易懂的语言为用户提供专业的解读。'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: maxTokens,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      const usage = data.usage?.total_tokens || maxTokens;
      return {
        content: data.choices[0].message.content,
        tokens: usage
      };
    }

    return {
      content: '无法获取AI解读，请稍后重试。',
      tokens: 0
    };
  } catch (error) {
    console.error('AI API error:', error);
    return {
      content: 'AI服务暂时不可用，请稍后重试。',
      tokens: 0
    };
  }
}

export async function getAIInterpretation(prompt: string, maxTokens: number = 2000): Promise<AIResponse> {
  return await callDeepSeekAPI(prompt, maxTokens);
}

// ==================== 易经占卜解读 ====================

export async function getYiJingBasicInterpretation(guaName: string, question: string): Promise<AIResponse> {
  const prompt = `
用户问题：${question}

占得${guaName}，请进行简要解读：

1. 卦象概述（1-2句话）
2. 核心启示（最关键的一点）
3. 简短建议（1-2句话）

请用简洁通俗的语言回答，控制在前100字以内。
  `.trim();

  return await callDeepSeekAPI(prompt, 500);
}

export async function getYiJingDeepInterpretation(
  guaName: string,
  guaCode: string,
  question: string,
  dongYao: number,
  bianGua?: string
): Promise<AIResponse> {
  const prompt = `
# 易经深度解读报告

## 基本信息
- 占得卦象：${guaName}（${guaCode}）
- 动爻位置：${dongYao > 0 ? `第${dongYao}爻` : '无动爻'}
- 变卦：${bianGua || '无'}
- 用户问题：${question}

## 请从以下维度进行深度解读：

### 一、卦象本体分析
1. 本卦的基本含义和象征意义
2. 卦辞核心解读
3. 卦象所代表的自然/社会意象

### 二、动爻分析
1. 动爻的爻辞含义
2. 动爻对整个卦象的影响
3. 为什么会是这个爻动（从问题角度分析）

### 三、变卦分析（如有）
1. 变卦的含义
2. 从本卦到变卦的转变趋势
3. 变化带来的启示

### 四、现状分析
结合用户问题，分析当前处境的特点：
- 核心矛盾是什么
- 有利因素有哪些
- 需要注意什么

### 五、趋势预测
1. 短期趋势（近期1-3个月）
2. 中期趋势（3-12个月）
3. 最终结果展望

### 六、行动建议
针对用户问题，提供3-5条具体可执行的建议。

### 七、注意事项
需要特别警惕或避免的事项。

### 八、补充解读
结合易理给出的人生哲理启示。

请用通俗易懂的语言回答，避免过多专业术语，篇幅控制在800-1200字。
  `.trim();

  return await callDeepSeekAPI(prompt, 2500);
}

// ==================== 八字命理解读 ====================

export async function getBaziBasicAnalysis(
  baziString: string,
  dayMain: string,
  wuxingScore: Record<string, number>
): Promise<AIResponse> {
  const prompt = `
八字：${baziString}
日主：${dayMain}
五行得分：木${wuxingScore.木 || 0}、火${wuxingScore.火 || 0}、土${wuxingScore.土 || 0}、金${wuxingScore.金 || 0}、水${wuxingScore.水 || 0}

请简要分析：
1. 日主强弱：${dayMain}的强弱判断
2. 五行特点：哪个五行最强/最弱
3. 一句话总结

控制在100字以内。
  `.trim();

  return await callDeepSeekAPI(prompt, 500);
}

export async function getBaziDeepAnalysis(
  baziString: string,
  dayMain: string,
  wuxingScore: Record<string, number>,
  shishen: Record<string, number>,
  god: string[],
  badGod: string[],
  mingGong?: string,
  taiYuan?: string
): Promise<AIResponse> {
  const prompt = `
# 八字深度命理分析报告

## 基本信息
- 四柱八字：${baziString}
- 日主：${dayMain}
- 五行得分：木${wuxingScore.木 || 0}、火${wuxingScore.火 || 0}、土${wuxingScore.土 || 0}、金${wuxingScore.金 || 0}、水${wuxingScore.水 || 0}
- 命宫：${mingGong || '待定'}
- 胎元：${taiYuan || '待定'}

## 十神分布
${Object.entries(shishen).map(([k, v]) => `- ${k}：${v}个`).join('\n')}

## 神煞分析
- 吉神：${god.length > 0 ? god.join('、') : '无明显吉神'}
- 忌神：${badGod.length > 0 ? badGod.join('、') : '无明显忌神'}

## 请进行深度分析：

### 一、五行格局分析
1. 日主强弱综合判断
2. 五行格局特点（身旺、身弱、从旺、从弱等）
3. 命局整体评价

### 二、性格分析
1. 日主特性详解
2. 十神组合反映的性格
3. 优势性格特质
4. 需要注意的性格弱点

### 三、事业财运
1. 适合的职业方向
2. 财运特点
3. 事业发展建议

### 四、感情婚姻
1. 感情运势特点
2. 配偶特征
3. 婚姻注意事项

### 五、健康提醒
1. 需要注意的身体方面
2. 五行对应的脏腑调养建议

### 六、大运趋势
简述当前大运特点（如果有更多信息可以详细分析）

### 七、命理建议
3-5条具体可行的人生建议

请用通俗易懂的语言，篇幅控制在1000-1500字。
  `.trim();

  return await callDeepSeekAPI(prompt, 3000);
}

// ==================== 姓名分析 ====================

export async function getNameBasicAnalysis(name: string, wuxing: string[], score: number): Promise<AIResponse> {
  const prompt = `
姓名：${name}
五行属性：${wuxing.join('、')}
综合评分：${score}分

请简要评价：
1. 五行搭配是否合适
2. 名字寓意好不好
3. 一句话建议

控制在100字以内。
  `.trim();

  return await callDeepSeekAPI(prompt, 400);
}

export async function getNameDeepAnalysis(
  name: string,
  wuxing: string[],
  wuge: { tian: number; ren: number; di: number; wai: number; zong: number },
  score: number,
  zodiac?: string,
  zodiacMatch?: string
): Promise<AIResponse> {
  const prompt = `
# 姓名深度分析报告

## 基本信息
- 姓名：${name}
- 五行属性：${wuxing.join('、')}
- 综合评分：${score}分

## 三才五格数理
- 天格：${wuge.tian}（${getWugeDesc(wuge.tian)}）
- 人格：${wuge.ren}（${getWugeDesc(wuge.ren)}）
- 地格：${wuge.di}（${getWugeDesc(wuge.di)}）
- 外格：${wuge.wai}（${getWugeDesc(wuge.wai)}）
- 总格：${wuge.zong}（${getWugeDesc(wuge.zong)}）

${zodiac ? `## 属相分析
- 属相：${zodiac}
- 匹配度：${zodiacMatch || '待分析'}` : ''}

## 请进行深度分析：

### 一、三才配置分析
1. 天、人、地三才关系
2. 三才配置吉凶判断
3. 对人生各方面的影响

### 二、五格数理详解
1. 各格数理含义
2. 数理吉凶分析
3. 对性格和命运的影响

### 三、五行搭配分析
1. 姓名五行相生相克关系
2. 五行平衡状况
3. 对命局的补益作用

### 四、属相匹配分析（如有）
1. 姓名与属相的和谐度
2. 属相宜忌在姓名中的体现

### 五、整体评价
1. 姓名的优势
2. 姓名需要注意的地方
3. 改名建议（如有必要）

### 六、成长建议
基于姓名分析，给出人生不同阶段的注意事项

请用通俗易懂的语言，篇幅控制在800-1000字。
  `.trim();

  return await callDeepSeekAPI(prompt, 2000);
}

function getWugeDesc(num: number): string {
  const desc: Record<number, string> = {
    1: '太极之数，万物开泰',
    2: '两仪之数，混沌未分',
    3: '三才之数，天地人和',
    4: '四象之数，待时而生',
    5: '五行之数，天地因子',
    6: '六爻之数，变易之道',
    7: '七政之数，刚柔并济',
    8: '八卦之数，阴阳相济',
    9: '天元之数，大业可成',
    10: '圆满之数，万物终焉',
    12: '耐苦之数，有志难伸',
    13: '春日牡丹，智勇双全',
    14: '破兆之数，薄命之象',
    15: '福寿之数，圆满吉顺',
    16: '厚重之数，兴家得贵',
    17: '刚强之数，突破万难',
    18: '有志竟成，权威有德',
    19: '多难之数，险运临身',
    20: '屋漏之数，智慧消沉',
    21: '明月中天，光风霁月',
    22: '秋草逢霜，孤独病弱',
    23: '壮丽之数，旭日东升',
    24: '掘藏得金，家门余庆',
    25: '英迈之数，理智具备',
    26: '变怪之数，波澜不平',
    27: '成长之数，自成自立',
    28: '骨肉分离，逆境难免',
    29: '智谋之数，财力归乡',
    30: '一成一败，浮沉不定',
    31: '花开并蒂，智勇双全',
    32: '宝马金鞍，权贵发达',
    33: '旭日东升，繁荣昌盛',
    34: '破家之数，散财破产',
    35: '高楼赏月，平静深远',
    36: '波澜重叠，风平浪静',
    37: '权威显达，志愿上达',
    38: '磨砺之数，金石为开',
    39: '富贵荣华，财帛丰盛',
    40: '退却之数，智能平平',
    41: '德望之数，地位高升',
    42: '二十数乱，杂务缠身',
    43: '散财破产，智谋奇发',
    44: '秋草逢霜，忧愁困苦',
    45: '顺风生帆，不断发展',
    46: '罗网之数，骨肉分离',
    47: '开花结果，权威得达',
    48: '青松立鹤，智谋兼备',
    49: '转变之数，吉凶难测',
    50: '一盛一衰，劳而无功',
    51: '东成西就，富贵吉祥',
    52: '有德之数，先短后长',
    53: '外美内苦，忧苦不断',
    54: '多难之数，忧愁日增',
    55: '善恶参半，外观幸福',
    56: '日照风霜，困苦一生',
    57: '努力发达，权威上达',
    58: '先苦后甘，晚福可期',
    59: '寒蝉悲风，智力缺乏',
    60: '无定之数，迷途欠吉'
  };
  return desc[num] || '数理平平';
}

// ==================== 紫微斗数解读 ====================

export async function getZiweiBasicAnalysis(stars: string[], palaces: string[]): Promise<AIResponse> {
  const prompt = `
紫微斗数命盘：
- 主星：${stars.join('、')}
- 十二宫：${palaces.join('、')}

请简要分析：
1. 命宫主星特点
2. 一句话总结

控制在100字以内。
  `.trim();

  return await callDeepSeekAPI(prompt, 500);
}

export async function getZiweiDeepAnalysis(
  stars: string[],
  palaces: string[],
  huStars: { huaxing: string; luhua: string; qiemen: string },
  dayuYun?: string
): Promise<AIResponse> {
  const prompt = `
# 紫微斗数深度分析报告

## 命盘信息
- 主星：${stars.join('、')}
- 十二宫：${palaces.join('、')}
- 四化星：化禄${huStars.huaxing}、化权${huStars.luhua}、化科${huStars.qiemen}

## 请进行深度分析：

### 一、命宫分析
1. 命宫主星组合特点
2. 命宫杂曜的影响
3. 性格特征详解

### 二、事业宫分析
1. 适合的职业方向
2. 事业发展特点
3. 职场注意事项

### 三、财帛宫分析
1. 财运特点
2. 理财建议

### 四、夫妻宫分析
1. 感情运势
2. 配偶特征
3. 婚姻建议

### 五、大运分析（如有）
当前大运特点和建议

### 六、综合建议
3-5条具体可行的人生建议

请用通俗易懂的语言，篇幅控制在1000-1500字。
  `.trim();

  return await callDeepSeekAPI(prompt, 3000);
}
