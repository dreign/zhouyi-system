'use client'

import React from 'react'

interface BaguaDerivationProps {
  className?: string
}

const TreeNode: React.FC<{
  x: number
  y: number
  label: string
  sub?: string
  color?: string
}> = ({ x, y, label, sub, color = '#3d2914' }) => (
  <g>
    <rect
      x={x - 40}
      y={y - 16}
      width={80}
      height={32}
      rx={16}
      fill={color}
      stroke="#c9a962"
      strokeWidth={1.5}
    />
    <text
      x={x}
      y={y + 5}
      textAnchor="middle"
      fontSize={14}
      fontWeight="bold"
      fill="#fff"
    >
      {label}
    </text>
    {sub && (
      <text
        x={x}
        y={y + 30}
        textAnchor="middle"
        fontSize={10}
        fill="#5a4520"
      >
        {sub}
      </text>
    )}
  </g>
)

const BaguaDerivation: React.FC<BaguaDerivationProps> = ({ className }) => {
  const bagua = [
    { label: '乾', sub: '天 ☰', x: 60, y: 260 },
    { label: '兑', sub: '泽 ☱', x: 120, y: 260 },
    { label: '离', sub: '火 ☲', x: 180, y: 260 },
    { label: '震', sub: '雷 ☳', x: 240, y: 260 },
    { label: '巽', sub: '风 ☴', x: 300, y: 260 },
    { label: '坎', sub: '水 ☵', x: 360, y: 260 },
    { label: '艮', sub: '山 ☶', x: 420, y: 260 },
    { label: '坤', sub: '地 ☷', x: 480, y: 260 },
  ]

  return (
    <svg
      className={className}
      viewBox="0 0 540 320"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Title */}
      <text x={270} y={24} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#3d2914">
        八卦衍生图
      </text>

      {/* Level 1: 太极 */}
      <TreeNode x={270} y={50} label="太极" sub="Taiji" color="#3d2914" />

      {/* Lines from 太极 to 两仪 */}
      <line x1={270} y1={66} x2={270} y2={90} stroke="#c9a962" strokeWidth={1.5} />

      {/* Level 2: 两仪 */}
      <TreeNode x={170} y={105} label="阳" sub="─" color="#c0392b" />
      <TreeNode x={370} y={105} label="阴" sub="--" color="#4a7b9d" />

      {/* Lines from 两仪 to 四象 */}
      <line x1={170} y1={121} x2={120} y2={145} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={170} y1={121} x2={220} y2={145} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={370} y1={121} x2={320} y2={145} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={370} y1={121} x2={420} y2={145} stroke="#c9a962" strokeWidth={1.5} />

      {/* Level 3: 四象 */}
      <TreeNode x={120} y={160} label="太阳" sub="" color="#c0392b" />
      <TreeNode x={220} y={160} label="少阴" sub="" color="#b8860b" />
      <TreeNode x={320} y={160} label="少阳" sub="" color="#4a7b9d" />
      <TreeNode x={420} y={160} label="太阴" sub="" color="#4a7c59" />

      {/* Lines from 四象 to 八卦 */}
      <line x1={120} y1={176} x2={60} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={120} y1={176} x2={120} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={220} y1={176} x2={180} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={220} y1={176} x2={240} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={320} y1={176} x2={300} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={320} y1={176} x2={360} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={420} y1={176} x2={420} y2={240} stroke="#c9a962" strokeWidth={1.5} />
      <line x1={420} y1={176} x2={480} y2={240} stroke="#c9a962" strokeWidth={1.5} />

      {/* Level 4: 八卦 */}
      {bagua.map((b) => (
        <TreeNode key={b.label} x={b.x} y={260} label={b.label} sub={b.sub} color="#5a4520" />
      ))}
    </svg>
  )
}

export default BaguaDerivation
