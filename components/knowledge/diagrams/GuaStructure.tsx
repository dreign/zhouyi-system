'use client'

import React from 'react'

interface GuaStructureProps {
  className?: string
}

/** A single line (爻) — solid (阳) or broken (阴) */
const YaoLine: React.FC<{
  x: number
  y: number
  solid: boolean
  label: string
}> = ({ x, y, solid, label }) => (
  <g>
    {solid ? (
      <rect x={x - 32} y={y - 4} width={64} height={8} rx={2} fill="#3d2914" />
    ) : (
      <g>
        <rect x={x - 32} y={y - 4} width={28} height={8} rx={2} fill="#3d2914" />
        <rect x={x + 4} y={y - 4} width={28} height={8} rx={2} fill="#3d2914" />
      </g>
    )}
    <text x={x + 42} y={y + 4} textAnchor="start" fontSize={11} fill="#5a4520">
      {label}
    </text>
  </g>
)

/** A trigram (卦) of 3 lines, rendered top to bottom */
const Trigram: React.FC<{
  x: number
  y: number
  lines: [boolean, boolean, boolean]
  labels: [string, string, string]
  label: string
}> = ({ x, y, lines, labels, label }) => (
  <g>
    <text x={x - 48} y={y + 26} textAnchor="end" fontSize={13} fontWeight="bold" fill="#3d2914">
      {label}
    </text>
    {lines.map((solid, i) => (
      <YaoLine key={i} x={x} y={y + i * 26} solid={solid} label={labels[i]} />
    ))}
  </g>
)

const GuaStructure: React.FC<GuaStructureProps> = ({ className }) => {
  // 天地否卦: 乾上坤下
  // 乾 (☰) = all solid lines
  // 坤 (☷) = all broken lines
  // Positions from bottom to top: 初爻, 二爻, 三爻, 四爻, 五爻, 上爻
  // In SVG: bottom lines are rendered lower (higher y), top lines are rendered higher (lower y)

  const cx = 180

  return (
    <svg
      className={className}
      viewBox="0 0 400 350"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Title */}
      <text x={200} y={26} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#3d2914">
        卦象结构图
      </text>

      <text x={200} y={46} textAnchor="middle" fontSize={13} fill="#5a4520">
        天地否卦 · 乾上坤下
      </text>

      {/* Upper trigram boundary label */}
      <text x={cx} y={68} textAnchor="middle" fontSize={10} fill="#c9a962">
        ─── 上卦 ───
      </text>

      {/* 上卦 (Upper trigram) — 乾 ☰ — all solid lines */}
      {/* Top line (y=80) = 上爻, middle (y=106) = 五爻, bottom (y=132) = 四爻 */}
      <Trigram
        x={cx}
        y={80}
        lines={[true, true, true]}
        labels={['上爻', '五爻', '四爻']}
        label="乾 ☰"
      />

      {/* Divider between upper and lower trigrams */}
      <line
        x1={cx - 48}
        y1={148}
        x2={cx + 48}
        y2={148}
        stroke="#c9a962"
        strokeWidth={1.5}
        strokeDasharray="4,3"
      />

      <text x={cx} y={164} textAnchor="middle" fontSize={10} fill="#c9a962">
        ─── 下卦 ───
      </text>

      {/* 下卦 (Lower trigram) — 坤 ☷ — all broken lines */}
      {/* Top line (y=174) = 三爻, middle (y=200) = 二爻, bottom (y=226) = 初爻 */}
      <Trigram
        x={cx}
        y={174}
        lines={[false, false, false]}
        labels={['三爻', '二爻', '初爻']}
        label="坤 ☷"
      />

      {/* Footnote: position order */}
      <text x={cx} y={330} textAnchor="middle" fontSize={11} fill="#5a4520">
        六爻自下而上：初爻 → 二爻 → 三爻 → 四爻 → 五爻 → 上爻
      </text>
    </svg>
  )
}

export default GuaStructure
