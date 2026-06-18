'use client'

import React from 'react'

interface TianganDizhiTableProps {
  className?: string
}

const tianganData = [
  { char: '甲', yinyang: '阳', wuxing: '木', color: '#4a7c59' },
  { char: '乙', yinyang: '阴', wuxing: '木', color: '#4a7c59' },
  { char: '丙', yinyang: '阳', wuxing: '火', color: '#c0392b' },
  { char: '丁', yinyang: '阴', wuxing: '火', color: '#c0392b' },
  { char: '戊', yinyang: '阳', wuxing: '土', color: '#b8860b' },
  { char: '己', yinyang: '阴', wuxing: '土', color: '#b8860b' },
  { char: '庚', yinyang: '阳', wuxing: '金', color: '#b8960b' },
  { char: '辛', yinyang: '阴', wuxing: '金', color: '#b8960b' },
  { char: '壬', yinyang: '阳', wuxing: '水', color: '#4a7b9d' },
  { char: '癸', yinyang: '阴', wuxing: '水', color: '#4a7b9d' },
]

const dizhiData = [
  { char: '子', yinyang: '阳', wuxing: '水', color: '#4a7b9d' },
  { char: '丑', yinyang: '阴', wuxing: '土', color: '#b8860b' },
  { char: '寅', yinyang: '阳', wuxing: '木', color: '#4a7c59' },
  { char: '卯', yinyang: '阴', wuxing: '木', color: '#4a7c59' },
  { char: '辰', yinyang: '阳', wuxing: '土', color: '#b8860b' },
  { char: '巳', yinyang: '阴', wuxing: '火', color: '#c0392b' },
  { char: '午', yinyang: '阳', wuxing: '火', color: '#c0392b' },
  { char: '未', yinyang: '阴', wuxing: '土', color: '#b8860b' },
  { char: '申', yinyang: '阳', wuxing: '金', color: '#b8960b' },
  { char: '酉', yinyang: '阴', wuxing: '金', color: '#b8960b' },
  { char: '戌', yinyang: '阳', wuxing: '土', color: '#b8860b' },
  { char: '亥', yinyang: '阴', wuxing: '水', color: '#4a7b9d' },
]

const cw = 50
const ch = 30
const hh = 34
const c1 = 10
const c2 = 60
const c3 = 110
const c4 = 160

const colCenters = [c1 + cw / 2, c2 + cw / 2, c3 + cw / 2, c4 + cw / 2]

const TianganDizhiTable: React.FC<TianganDizhiTableProps> = ({ className }) => {
  const rows = [
    ...tianganData.map((d) => ({ ...d, section: '天干' })),
    ...dizhiData.map((d) => ({ ...d, section: '地支' })),
  ]

  const totalHeight = hh + rows.length * ch + 20

  return (
    <svg
      className={className}
      viewBox={`0 0 ${c4 + cw + 10} ${totalHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      <text x={(c4 + cw + 10) / 2} y={18} textAnchor="middle" fontSize={16} fontWeight="bold" fill="#3d2914">
        天干地支表
      </text>

      {/* Header row */}
      <g>
        <rect x={c1} y={24} width={cw} height={hh} fill="#3d2914" rx={3} />
        <text x={colCenters[0]} y={24 + hh / 2 + 1} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#fff">干支</text>
        <rect x={c2} y={24} width={cw} height={hh} fill="#3d2914" rx={3} />
        <text x={colCenters[1]} y={24 + hh / 2 + 1} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#fff">字符</text>
        <rect x={c3} y={24} width={cw} height={hh} fill="#3d2914" rx={3} />
        <text x={colCenters[2]} y={24 + hh / 2 + 1} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#fff">阴阳</text>
        <rect x={c4} y={24} width={cw} height={hh} fill="#3d2914" rx={3} />
        <text x={colCenters[3]} y={24 + hh / 2 + 1} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#fff">五行</text>
      </g>

      {/* Data rows */}
      {rows.map((d, i) => {
        const y = 24 + hh + i * ch
        const bg = i % 2 === 0 ? '#f9f5ee' : '#f0e8d8'
        const showSection = i === 0 || (i === tianganData.length && d.section !== rows[i - 1].section)
        return (
          <g key={`${d.section}-${d.char}`}>
            <rect x={c1} y={y} width={cw} height={ch} fill={bg} stroke="#d4c5a0" strokeWidth={0.5} />
            <text x={colCenters[0]} y={y + ch / 2 + 1} textAnchor="middle" fontSize={11} fill="#3d2914">
              {showSection ? d.section : ''}
            </text>
            <rect x={c2} y={y} width={cw} height={ch} fill={bg} stroke="#d4c5a0" strokeWidth={0.5} />
            <text x={colCenters[1]} y={y + ch / 2 + 1} textAnchor="middle" fontSize={15} fontWeight="bold" fill="#3d2914">
              {d.char}
            </text>
            <rect x={c3} y={y} width={cw} height={ch} fill={bg} stroke="#d4c5a0" strokeWidth={0.5} />
            <text x={colCenters[2]} y={y + ch / 2 + 1} textAnchor="middle" fontSize={12} fill="#5a4520">
              {d.yinyang}
            </text>
            <rect x={c4} y={y} width={cw} height={ch} fill={bg} stroke="#d4c5a0" strokeWidth={0.5} />
            <text x={colCenters[3]} y={y + ch / 2 + 1} textAnchor="middle" fontSize={12} fill={d.color} fontWeight="bold">
              {d.wuxing}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default TianganDizhiTable
