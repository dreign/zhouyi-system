'use client'

import React from 'react'

interface SizhuStructureProps {
  className?: string
}

const Pillar: React.FC<{
  x: number
  label: string
  tiangan: string
  dizhi: string
  color: string
}> = ({ x, label, tiangan, dizhi, color }) => (
  <g>
    {/* Pillar label */}
    <text x={x} y={40} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#3d2914">
      {label}
    </text>

    {/* 天干 box */}
    <rect
      x={x - 32}
      y={56}
      width={64}
      height={48}
      rx={6}
      fill={color}
      stroke="#3d2914"
      strokeWidth={2}
    />
    <text
      x={x}
      y={86}
      textAnchor="middle"
      fontSize={22}
      fontWeight="bold"
      fill="#fff"
    >
      {tiangan}
    </text>
    <text
      x={x}
      y={110}
      textAnchor="middle"
      fontSize={10}
      fill="#5a4520"
    >
      天干
    </text>

    {/* Connecting line */}
    <line x1={x} y1={118} x2={x} y2={136} stroke="#c9a962" strokeWidth={2} />

    {/* 地支 box */}
    <rect
      x={x - 32}
      y={136}
      width={64}
      height={48}
      rx={6}
      fill={color}
      stroke="#3d2914"
      strokeWidth={2}
      opacity={0.7}
    />
    <text
      x={x}
      y={166}
      textAnchor="middle"
      fontSize={22}
      fontWeight="bold"
      fill="#fff"
    >
      {dizhi}
    </text>
    <text
      x={x}
      y={190}
      textAnchor="middle"
      fontSize={10}
      fill="#5a4520"
    >
      地支
    </text>
  </g>
)

const SizhuStructure: React.FC<SizhuStructureProps> = ({ className }) => {
  // 4 pillars evenly spaced
  const spacing = 85
  const startX = 55

  const pillars = [
    { label: '年柱', tiangan: '甲', dizhi: '子', color: '#4a7c59' },
    { label: '月柱', tiangan: '丙', dizhi: '寅', color: '#c0392b' },
    { label: '日柱', tiangan: '戊', dizhi: '午', color: '#b8860b' },
    { label: '时柱', tiangan: '庚', dizhi: '戌', color: '#4a7b9d' },
  ]

  return (
    <svg
      className={className}
      viewBox="0 0 400 230"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Title */}
      <text x={200} y={22} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#3d2914">
        四柱结构图
      </text>

      {pillars.map((p, i) => (
        <Pillar
          key={p.label}
          x={startX + i * spacing}
          label={p.label}
          tiangan={p.tiangan}
          dizhi={p.dizhi}
          color={p.color}
        />
      ))}
    </svg>
  )
}

export default SizhuStructure
