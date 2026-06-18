'use client';

interface PalaceExplanationProps {
  type: 'palace' | 'stars' | 'transformation' | 'dashboard';
  palaceName?: string; // current active palace name for contextual hints
  mainStars?: string[]; // main stars in current palace
}

const EXPLANATIONS: Record<string, {
  title: string;
  general: string;
  dimensions?: {
    label: string;
    hint: string;
  }[];
}> = {
  palace: {
    title: '🔮 命盘怎么看？',
    general: '十二宫格就是您的人生地图。每个格子代表一个人生领域（财运、事业、感情等），里面的星曜就是影响该领域的力量。星曜亮（庙/旺）表示这个领域能量强；暗（陷/平）表示需要多花心思。',
    dimensions: [
      { label: '💰 财运', hint: '看「财帛宫」和「田宅宫」的星曜。武曲、天府在财帛宫且亮度高，财运较好；空劫、巨门在财帛宫则需注意理财。' },
      { label: '❤️ 姻缘', hint: '看「夫妻宫」和「福德宫」。紫微、天府在夫妻宫主配偶有地位；廉贞、贪狼则感情丰富但易有波折。太阴在夫妻宫主配偶温柔。' },
      { label: '🏥 健康', hint: '看「疾厄宫」。七杀、破军、擎羊在疾厄宫需注意意外伤害；天同、天梁在疾厄宫则体质较好。' },
      { label: '💼 事业', hint: '看「官禄宫」和「命宫」。紫微、武曲在官禄宫适合管理或金融；天机、文昌适合策划、教育；太阳适合公关、外交。' },
      { label: '👥 人际', hint: '看「迁移宫」和「交友宫」。天机、太阴在迁移宫人缘好；巨门在交友宫容易有口舌是非。' },
    ],
  },
  stars: {
    title: '⭐ 星曜怎么看？',
    general: '紫微斗数14主星就像一部"宫廷剧"：紫微是皇帝（领导力）、天机是军师（智慧）、武曲是财政大臣（财富）…每颗星都有独特的性格和能量。看星曜不能只看一颗，要综合看它们在命盘中的位置和互动。',
    dimensions: [
      { label: '👑 领导型', hint: '紫微、天府、天相——这类星坐命的人适合当领导、管理岗位，沉稳大度，但有时会固执。' },
      { label: '🧠 智慧型', hint: '天机、文昌、文曲——聪明灵活，适合教育、策划、创作类工作。天机善变，文昌文曲主文采。' },
      { label: '⚔️ 行动型', hint: '七杀、破军、武曲——执行力强，适合创业、军警、金融。七杀果断但暴躁，破军革新但耗损大。' },
      { label: '💕 情感型', hint: '廉贞、贪狼、太阴——感情丰富。廉贞是艺术才华，贪狼是多才多艺但欲望强，太阴是温柔细腻。' },
    ],
  },
  transformation: {
    title: '🔄 四化能量怎么看？',
    general: '四化（禄权科忌）是天干能量变化的表现，就像游戏里的"状态加成"：化禄是"加血加钱"，化权是"加攻击力"，化科是"加声望"，化忌是"加难度"。每年天干不同，四化位置也不同，这就是运势变化的原因。',
    dimensions: [
      { label: '💫 化禄（得）', hint: '代表利益、享受、机遇。化禄入财帛宫主财运佳，入田宅宫主房产增值，入疾厄宫则注意享乐过头影响健康。' },
      { label: '⚡ 化权（掌）', hint: '代表权力、执行、能力。化权入官禄宫主事业有实权，入命宫主能力强但个性强势，入夫妻宫可能较强势。' },
      { label: '🎯 化科（名）', hint: '代表名声、机会、贵人。化科入命宫主名声好，入官禄宫主事业有名望，入父母宫主有长辈提携。' },
      { label: '⚠️ 化忌（耗）', hint: '代表代价、阻碍、变动。化忌入哪宫，哪宫就容易出问题——入财帛宫防破财，入疾厄宫注意健康，入夫妻宫感情需多沟通。' },
    ],
  },
  dashboard: {
    title: '📊 综合看板怎么看？',
    general: '综合看板把命盘的关键信息汇总在一起。"命盘摘要"快速了解命盘特质，"六亲关系"帮您看清身边重要的人对您的影响。记住：命盘是地图，不是判决书——它告诉您哪里有风景、哪里有坑，但路还是要自己走。',
    dimensions: [
      { label: '🔍 命宫主星决定性格底色', hint: '命宫是整张盘的核心。紫微坐命：有领导气质，适合做决策者。天机坐命：聪明灵活，适合做谋划者。贪狼坐命：多才多艺，适合创意类工作。' },
      { label: '🔗 六亲关系看缘分深浅', hint: '父母宫看与父母缘分；夫妻宫看婚姻质量；子女宫看子女缘；兄弟宫看手足情。吉星多则缘分深，煞星多则需要多经营。' },
      { label: '📈 大限流年看时机把握', hint: '大限（10年周期）和流年（每年）告诉您什么时候该进、什么时候该守。好的大限遇到好的流年，就是"天时地利人和"。' },
    ],
  },
};

export default function PalaceExplanation({ type, palaceName, mainStars }: PalaceExplanationProps) {
  const data = EXPLANATIONS[type];
  if (!data) return null;
  
  return (
    <div className="mt-8 bg-gradient-to-b from-[#faf5e8] to-[#f5edd6] border border-[#c9a962]/30 rounded-xl p-5">
      <h4 className="font-bold text-[#3d2914] text-lg mb-3">{data.title}</h4>
      <p className="text-sm text-[#5a4520] leading-relaxed mb-4">{data.general}</p>
      
      {data.dimensions && (
        <div className="space-y-3">
          <div className="text-xs text-[#5a4520]/70 font-medium border-b border-[#c9a962]/20 pb-1">💡 不同方向速查</div>
          {data.dimensions.map((dim, idx) => (
            <div key={idx} className="bg-white/60 rounded-lg p-3 border border-[#c9a962]/10">
              <div className="font-medium text-sm text-[#3d2914] mb-1">{dim.label}</div>
              <div className="text-xs text-[#5a4520] leading-relaxed">{dim.hint}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 text-xs text-[#c9a962] text-center border-t border-[#c9a962]/20 pt-3">
        💬 命理是参考不是定数，知命是为了更好地创造人生
      </div>
    </div>
  );
}
