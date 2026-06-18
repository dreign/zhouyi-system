'use client'

import React from 'react'

interface WugeStructureProps {
  className?: string
}

const GridBox: React.FC<{
  x: number
  y: number
  label: string
  sublabel: string
  color: string
  desc: string
}> = ({ x, y, label, sublabel, color, desc }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={100}
      height={70}
      rx={8}
      fill={color}
      stroke="#3d2914"
      strokeWidth={2}
    />
    <text
      x={x + 50}
      y={y + 26}
      textAnchor="middle"
      fontSize={16}
      fontWeight="bold"
      fill="#fff"
    >
      {label}
    </text>
    <text
      x={x + 50}
      y={y + 46}
      textAnchor="middle"
      fontSize={12}
      fill="rgba(255,255,255,0.85)"
    >
      {sublabel}
    </text>
    <text
      x={x + 50}
      y={y + 80}
      textAnchor="middle"
      fontSize={10}
      fill="#5a4520"
    >
      {desc}
    </text>
  </g>
)

const WugeStructure: React.FC<WugeStructureProps> = ({ className }) => {
  // Layout: 天格 (top-center), 人格 (center), 地格 (bottom-center),
  // 外格 (left), 总格 (right) — arranged in an H-like pattern
  return (
    <svg
      className={className}
      viewBox="0 0 400 360"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Title */}
      <text x={200} y={28} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#3d2914">
        五格剖象图
      </text>

      {/* 外格 - left */}
      <GridBox
        x={20}
        y={120}
        label="外格"
        sublabel="Wài Gé"
        color="#4a7b9d"
        desc="副运 · 社交与外在"
      />

      {/* 天格 - top center */}
      <GridBox
        x={150}
        y={40}
        label="天格"
        sublabel="Tiān Gé"
        color="#c0392b"
        desc="祖运 · 先天根基"
      />

      {/* 人格 - center */}
      <GridBox
        x={150}
        y={140}
        label="人格"
        sublabel="Rén Gé"
        color="#b8860b"
        desc="主运 · 一生命运核心"
      />

      {/* 地格 - bottom center */}
      <GridBox
        x={150}
        y={240}
        label="地格"
        sublabel="Dì Gé"
        color="#4a7c59"
        desc="前运 · 少年运程"
      />

      {/* 总格 - right */}
      <GridBox
        x={280}
        y={120}
        label="总格"
        sublabel="Zǒng Gé"
        color="#5a4520"
        desc="后运 · 一生总运"
      />

      {/* Connecting lines */}
      {/* 天格 ↔ 人格 */}
      <line x1={200} y1={110} x2={200} y2={140} stroke="#c9a962" strokeWidth={2} />
      <ArrowHead x1={200} y1={110} x2={200} y2={140} />
      <ArrowHead x1={200} y1={140} x2={200} y2={110} />

      {/* 人格 ↔ 地格 */}
      <line x1={200} y1={210} x2={200} y2={240} stroke="#c9a962" strokeWidth={2} />
      <ArrowHead x1={200} y1={210} x2={200} y2={240} />
      <ArrowHead x1={200} y1={240} x2={200} y2={210} />

      {/* 外格 ↔ 人格 */}
      <line x1={120} y1={155} x2={150} y2={155} stroke="#c9a962" strokeWidth={2} />
      <ArrowHead x1={120} y1={155} x2={150} y2={155} />
      <ArrowHead x1={150} y1={155} x2={120} y2={155} />

      {/* 人格 ↔ 总格 */}
      <line x1={250} y1={175} x2={280} y2={155} stroke="#c9a962" strokeWidth={2} />
      <ArrowHead x1={250} y1={175} x2={280} y2={155} />
      <ArrowHead x1={280} y1={155} x2={250} y2={175} />
    </svg>
  )
}

const ArrowHead: React.FC<{
  x1: number
  y1: number
  x2: number
  y2: number
}> = ({ x1, y1, x2, y2 }) => {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy)
  if (len === 0) return null
  const ux = dx / len
  const uy = dy / len
  const midX = (x1 + x2) / 2
  const midY = (y1 + y2) / 2
  const size = 6
  const offset = 0

  return (
    <polygon
      points={`${midX + ux * offset},${midY + uy * offset} ${midX + ux * offset - ux * size - uy * size * 0.5},${midY + uy * offset - uy * size + ux * size * 0.5} ${midX + ux * offset - ux * size + uy * size * 0.5},${midY + uy * offset - uy * size - ux * size * 0.5}`}
      fill="#c9a962"
    />
  )
}

export default WugeStructure
