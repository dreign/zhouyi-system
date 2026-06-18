'use client'

import React from 'react'

interface GongXingHuaProps {
  className?: string
}

const CircleNode: React.FC<{
  x: number
  y: number
  label: string
  sublabel: string
  icon: string
  color: string
}> = ({ x, y, label, sublabel, icon, color }) => (
  <g>
    <circle cx={x} cy={y} r={50} fill={color} stroke="#3d2914" strokeWidth={2} />
    <text x={x} y={y - 8} textAnchor="middle" fontSize={24} fill="#fff">
      {icon}
    </text>
    <text x={x} y={y + 16} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#fff">
      {label}
    </text>
    <text x={x} y={y + 45} textAnchor="middle" fontSize={11} fill="#5a4520">
      {sublabel}
    </text>
  </g>
)

const GongXingHua: React.FC<GongXingHuaProps> = ({ className }) => {
  // Place the 3 nodes as a triangle
  // 宫位 (top-center)
  // 星曜 (bottom-left)
  // 四化 (bottom-right)
  const nodes = [
    { x: 200, y: 70, label: '宫位', sublabel: '12宫 · 命宫兄弟宫等', icon: '🏛', color: '#4a7c59' },
    { x: 80, y: 230, label: '星曜', sublabel: '14主星 · 紫微天机等', icon: '⭐', color: '#4a7b9d' },
    { x: 320, y: 230, label: '四化', sublabel: '禄权科忌 · 化象', icon: '🔄', color: '#c0392b' },
  ]

  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Title */}
      <text x={200} y={28} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#3d2914">
        宫星化关系图
      </text>

      {/* Connecting lines between all 3 nodes */}
      {[0, 1, 2].map((i) => {
        const j = (i + 1) % 3
        return (
          <g key={`line-${i}-${j}`}>
            <line
              x1={nodes[i].x}
              y1={nodes[i].y}
              x2={nodes[j].x}
              y2={nodes[j].y}
              stroke="#c9a962"
              strokeWidth={2}
            />
            {/* Small arrow at midpoint */}
            <ArrowHead
              x1={nodes[i].x}
              y1={nodes[i].y}
              x2={nodes[j].x}
              y2={nodes[j].y}
            />
            <ArrowHead
              x1={nodes[j].x}
              y1={nodes[j].y}
              x2={nodes[i].x}
              y2={nodes[i].y}
            />
          </g>
        )
      })}

      {/* Edge labels */}
      <text x={140} y={160} textAnchor="middle" fontSize={11} fill="#5a4520" transform="rotate(-25, 140, 160)">
        宫位定星曜
      </text>
      <text x={260} y={160} textAnchor="middle" fontSize={11} fill="#5a4520" transform="rotate(25, 260, 160)">
        星曜化四化
      </text>
      <text x={200} y={250} textAnchor="middle" fontSize={11} fill="#5a4520">
        四化入宫位
      </text>

      {/* Node circles */}
      {nodes.map((n) => (
        <CircleNode
          key={n.label}
          x={n.x}
          y={n.y}
          label={n.label}
          sublabel={n.sublabel}
          icon={n.icon}
          color={n.label === '宫位' ? '#4a7c59' : n.label === '星曜' ? '#4a7b9d' : '#c0392b'}
        />
      ))}
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
  const ux = dx / len
  const uy = dy / len
  const midX = (x1 + x2) / 2
  const midY = (y1 + y2) / 2
  const size = 6
  const offset = 8

  return (
    <polygon
      points={`${midX + ux * offset},${midY + uy * offset} ${midX + ux * offset - ux * size - uy * size * 0.5},${midY + uy * offset - uy * size + ux * size * 0.5} ${midX + ux * offset - ux * size + uy * size * 0.5},${midY + uy * offset - uy * size - ux * size * 0.5}`}
      fill="#c9a962"
    />
  )
}

export default GongXingHua
