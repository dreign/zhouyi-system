'use client';

// 精美祥云装饰
export const CloudDecoration = ({ color = '#c9a962', opacity = 0.4 }: { color?: string, opacity?: number }) => (
  <svg viewBox="0 0 300 120" className="w-full h-full" style={{ opacity }}>
    <path 
      d="M30 70 Q50 25 90 40 Q130 55 170 35 Q210 15 250 45 Q240 80 200 70 Q160 60 120 80 Q80 100 30 70" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path 
      d="M50 60 Q70 30 100 45 Q140 60 175 40 Q210 20 235 50 Q225 75 190 65 Q155 55 120 70 Q85 85 50 60" 
      fill="none" 
      stroke={color} 
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path 
      d="M15 90 Q40 60 75 70 Q110 80 145 65 Q180 50 215 75 Q205 100 170 95 Q135 90 100 105 Q65 120 15 90" 
      fill="none" 
      stroke={color} 
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path d="M75 55 Q85 45 95 55" fill="none" stroke={color} strokeWidth="0.6"/>
    <path d="M160 50 Q170 40 180 50" fill="none" stroke={color} strokeWidth="0.6"/>
  </svg>
);

// 青花瓷祥云装饰
export const PorcelainCloud = () => (
  <svg viewBox="0 0 250 100" className="w-full h-full">
    <path 
      d="M25 60 Q45 20 80 35 Q115 50 150 30 Q185 10 220 40 Q210 70 175 60 Q140 50 105 65 Q70 80 25 60" 
      fill="none" 
      stroke="#2c5aa0" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M35 55 Q55 25 85 38 Q118 52 152 33 Q186 14 215 43 Q205 68 172 58 Q140 48 108 63 Q75 78 35 55" 
      fill="none" 
      stroke="#4a7bc4" 
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M60 45 Q70 35 80 45 Q70 55 60 45" fill="none" stroke="#2c5aa0" strokeWidth="0.8"/>
    <path d="M155 40 Q165 30 175 40 Q165 50 155 40" fill="none" stroke="#2c5aa0" strokeWidth="0.8"/>
  </svg>
);

// 螭龙装饰（青花瓷风格）
export const ChiDragonDecoration = () => (
  <svg viewBox="0 0 200 100" className="w-full h-full">
    <path 
      d="M10 50 Q30 30 55 40 Q80 50 105 35 Q130 20 155 30 Q175 40 185 50 Q175 60 150 55 Q125 50 100 65 Q75 80 50 60 Q25 45 10 50" 
      fill="none" 
      stroke="#2c5aa0" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path 
      d="M20 48 Q40 32 60 42 Q85 52 110 38 Q135 25 155 35 Q170 43 178 50" 
      fill="none" 
      stroke="#4a7bc4" 
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="185" cy="45" r="6" fill="none" stroke="#2c5aa0" strokeWidth="1.5"/>
    <circle cx="182" cy="43" r="1.5" fill="#2c5aa0"/>
    <circle cx="188" cy="43" r="1.5" fill="#2c5aa0"/>
    <path d="M185 50 Q180 55 175 52" fill="none" stroke="#2c5aa0" strokeWidth="1"/>
    <path d="M178 48 L170 52" stroke="#2c5aa0" strokeWidth="0.8"/>
    <path d="M178 42 L170 38" stroke="#2c5aa0" strokeWidth="0.8"/>
    <path d="M183 38 L180 32" stroke="#2c5aa0" strokeWidth="1"/>
    <path d="M187 38 L190 32" stroke="#2c5aa0" strokeWidth="1"/>
    {[140, 120, 100, 80, 60].map((x, i) => (
      <circle key={i} cx={x} cy={40 + i} r="2" fill="none" stroke="#2c5aa0" strokeWidth="0.5"/>
    ))}
  </svg>
);

// 饕餮纹装饰
export const TaotieDecoration = ({ style = 'gold' }: { style?: 'gold' | 'porcelain' }) => {
  const strokeColor = style === 'gold' ? '#c9a962' : '#2c5aa0';
  const fillColor = style === 'gold' ? '#3d2914' : '#1e3a5f';
  
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <circle cx="60" cy="60" r="55" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <circle cx="60" cy="60" r="48" fill="none" stroke={strokeColor} strokeWidth="0.8" opacity="0.6"/>
      <ellipse cx="45" cy="50" rx="8" ry="6" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <ellipse cx="75" cy="50" rx="8" ry="6" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <circle cx="45" cy="50" r="3" fill={fillColor} opacity="0.5"/>
      <circle cx="75" cy="50" r="3" fill={fillColor} opacity="0.5"/>
      <path d="M35 40 Q40 35 48 38" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M85 40 Q80 35 72 38" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M60 48 L60 65" stroke={strokeColor} strokeWidth="2"/>
      <path d="M48 68 Q60 78 72 68" fill="none" stroke={strokeColor} strokeWidth="2"/>
      <path d="M52 72 Q60 76 68 72" fill="none" stroke={strokeColor} strokeWidth="1.2"/>
      <path d="M50 70 L48 76" stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M70 70 L72 76" stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M38 45 Q30 35 35 28" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M82 45 Q90 35 85 28" fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <path d="M32 55 Q28 60 32 65" fill="none" stroke={strokeColor} strokeWidth="1"/>
      <path d="M88 55 Q92 60 88 65" fill="none" stroke={strokeColor} strokeWidth="1"/>
      <path d="M55 78 Q60 85 65 78" fill="none" stroke={strokeColor} strokeWidth="1"/>
      <path d="M60 30 Q55 25 60 20 Q65 25 60 30" fill="none" stroke={strokeColor} strokeWidth="0.8" opacity="0.5"/>
      <path d="M60 90 Q55 95 60 100 Q65 95 60 90" fill="none" stroke={strokeColor} strokeWidth="0.8" opacity="0.5"/>
    </svg>
  );
};

// 回纹装饰边
export const MeanderPattern = ({ color = '#2c5aa0', width = 300, height = 30 }: { color?: string, width?: number, height?: number }) => (
  <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
    {Array.from({ length: Math.floor(width / 30) }).map((_, i) => (
      <g key={i} transform={`translate(${i * 30}, 0)`}>
        <path d="M0 0 L20 0 L20 10 L10 10 L10 20 L20 20 L20 30" fill="none" stroke={color} strokeWidth="1.5"/>
      </g>
    ))}
  </svg>
);

// 页面装饰容器 - 简化版本
export const PageDecorationWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-paper">
    {children}
  </div>
);

// 装饰卡片角标
export const DecorativeCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-8 h-8 opacity-30">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path d="M0 8 L8 8 L8 0" fill="none" stroke="#2c5aa0" strokeWidth="1.5"/>
        <circle cx="4" cy="4" r="1.5" fill="none" stroke="#2c5aa0" strokeWidth="1"/>
      </svg>
    </div>
    <div className="absolute top-0 right-0 w-8 h-8 opacity-30 transform scale-x-[-1]">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path d="M0 8 L8 8 L8 0" fill="none" stroke="#2c5aa0" strokeWidth="1.5"/>
        <circle cx="4" cy="4" r="1.5" fill="none" stroke="#2c5aa0" strokeWidth="1"/>
      </svg>
    </div>
    <div className="absolute bottom-0 left-0 w-8 h-8 opacity-30 transform scale-y-[-1]">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path d="M0 8 L8 8 L8 0" fill="none" stroke="#2c5aa0" strokeWidth="1.5"/>
        <circle cx="4" cy="4" r="1.5" fill="none" stroke="#2c5aa0" strokeWidth="1"/>
      </svg>
    </div>
    <div className="absolute bottom-0 right-0 w-8 h-8 opacity-30 transform scale-x-[-1] scale-y-[-1]">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path d="M0 8 L8 8 L8 0" fill="none" stroke="#2c5aa0" strokeWidth="1.5"/>
        <circle cx="4" cy="4" r="1.5" fill="none" stroke="#2c5aa0" strokeWidth="1"/>
      </svg>
    </div>
  </>
);
