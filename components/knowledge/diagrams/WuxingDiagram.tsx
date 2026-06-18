'use client'

import React from 'react'

interface WuxingDiagramProps {
  className?: string
}

const WuxingDiagram: React.FC<WuxingDiagramProps> = ({ className }) => {
  const cx = 200
  const cy = 175
  const r = 110

  // 5 elements in generating order (clockwise from top): 木 → 火 → 土 → 金 → 水
  const elements = [
    { name: '木', color: '#4a7c59', angle: -90 },
    { name: '火', color: '#c0392b', angle: -18 },
    { name: '土', color: '#b8860b', angle: 54 },
    { name: '金', color: '#f5f0e0', angle: 126 },
    { name: '水', color: '#4a7b9d', angle: 198 },
  ]

  const getPos = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    }
  }

  const elementPositions = elements.map((el) => ({
    ...el,
    ...getPos(el.angle),
  }))

  // Generating cycle: 木→火→土→金→水 (clockwise, adjacent)
  const generatingPairs = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
  ]

  // Overcoming cycle: 木→土→水→火→金 (across the star)
  const overcomingPairs = [
    [0, 2], [2, 4], [4, 1], [1, 3], [3, 0],
  ]

  const drawArrow = (x1: number, y1: number, x2: number, y2: number, color: string, dashed = false) => {
    const dx = x2 - x1
    const dy = y2 - y1
    const len = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / len
    const uy = dy / len
    // Shorten arrow to stop before the element circle
    const pad = 36
    const sx = x1 + ux * pad
    const sy = y1 + uy * pad
    const ex = x2 - ux * pad
    const ey = y2 - uy * pad

    const mx = ex - ux * 12
    const my = ey - uy * 12
    const arrowSize = 8

    return (
      <g key={`${x1}-${y1}-${x2}-${y2}`}>
        <line
          x1={sx}
          y1={sy}
          x2={mx}
          y2={my}
          stroke={color}
          strokeWidth={dashed ? 1.8 : 2.2}
          strokeDasharray={dashed ? '6,4' : 'none'}
          opacity={0.7}
        />
        {/* Arrowhead */}
        <polygon
          points={`${ex},${ey} ${ex - ux * arrowSize - uy * arrowSize * 0.5},${ey - uy * arrowSize + ux * arrowSize * 0.5} ${ex - ux * arrowSize + uy * arrowSize * 0.5},${ey - uy * arrowSize - ux * arrowSize * 0.5}`}
          fill={color}
          opacity={0.7}
        />
      </g>
    )
  }

  // Edges midpoint for labels
  const labelPos = (i1: number, i2: number) => {
    const p1 = elementPositions[i1]
    const p2 = elementPositions[i2]
    return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }
  }

  return (
    <svg
      className={className}
      viewBox="0 0 400 350"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Title */}
      <text x={200} y={28} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#3d2914">
        五行相生相克图
      </text>

      {/* Legend */}
      <text x={80} y={330} fontSize={12} fill="#c9a962">— 相生（顺生）</text>
      <line x1={170} y1={326} x2={210} y2={326} stroke="#c9a962" strokeWidth={2.2} />
      <text x={230} y={330} fontSize={12} fill="#c9a962">— — 相克（隔克）</text>
      <line x1={320} y1={326} x2={360} y2={326} stroke="#c9a962" strokeWidth={1.8} strokeDasharray="6,4" />

      {/* Overcoming cycle arrows (drawn first so they are behind) */}
      {overcomingPairs.map(([i, j]) => {
        const from = elementPositions[i]
        const to = elementPositions[j]
        return drawArrow(from.x, from.y, to.x, to.y, '#c9a962', true)
      })}

      {/* Generating cycle arrows */}
      {generatingPairs.map(([i, j]) => {
        const from = elementPositions[i]
        const to = elementPositions[j]
        return drawArrow(from.x, from.y, to.x, to.y, '#c9a962', false)
      })}

      {/* Labels on edges */}
      <text x={labelPos(0, 1).x} y={labelPos(0, 1).y - 12} textAnchor="middle" fontSize={11} fill="#5a4520">相生</text>
      <text x={labelPos(0, 2).x} y={labelPos(0, 2).y - 16} textAnchor="middle" fontSize={11} fill="#5a4520">相克</text>

      {/* Element circles */}
      {elementPositions.map((el) => (
        <g key={el.name}>
          <circle cx={el.x} cy={el.y} r={30} fill={el.color} stroke="#3d2914" strokeWidth={2} />
          <text x={el.x} y={el.y + 5} textAnchor="middle" fontSize={18} fontWeight="bold" fill={el.name === '金' ? '#3d2914' : '#fff'}>
            {el.name}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default WuxingDiagram
