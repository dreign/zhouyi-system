'use client';

const knowledgeItems = [
  {
    title: '五行互补',
    icon: '☯',
    content: '五行（金木水火土）是八字合婚的核心。双方五行互补，则性格相合、运势相济。一方缺某五行，另一方该五行强旺，即为互补之象。',
    bgClass: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    title: '生肖关系',
    icon: '🐉',
    content: '十二生肖有六合、三合、相冲、相害等关系。六合（如鼠牛合）和三合（如猴鼠龙合）为上等婚配，相冲（如鼠马冲）则需多磨合。',
    bgClass: 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200',
    iconBg: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: '日柱分析',
    icon: '🌞',
    content: '日柱代表一个人的本质。天干五合（甲己合、乙庚合等）是上等姻缘标志。日柱干支相生相合，则夫妻关系和谐，志同道合。',
    bgClass: 'bg-gradient-to-br from-red-50 to-pink-50 border-pink-200',
    iconBg: 'bg-red-100 text-red-700',
  },
];

export default function KnowledgeCards() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#3d2914] mb-4 text-center">
        <span className="text-[#c9a962]">◇</span> 八字合婚怎么看？ <span className="text-[#c9a962]">◇</span>
      </h2>
      <p className="text-sm text-[#5a4520] text-center mb-6 max-w-2xl mx-auto">
        八字合婚从三个核心维度分析两人的匹配度
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {knowledgeItems.map((item, idx) => (
          <div key={idx} className={`rounded-xl p-5 border ${item.bgClass}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-[#3d2914]">{item.title}</h3>
            </div>
            <p className="text-sm text-[#5a4520] leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
