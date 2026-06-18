'use client';

import { useState } from 'react';

interface KnowledgePanelProps {
  title: string;
  icon?: string;
  sections: Array<{
    title: string;
    content: string;
    diagram?: React.ReactNode;
  }>;
  defaultOpen?: boolean;
}

export default function KnowledgePanel({
  title,
  icon,
  sections,
  defaultOpen = false,
}: KnowledgePanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-[#c9a962]/30 bg-gradient-to-b from-[#faf5e8] to-[#f5edd6]">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <h3 className="font-bold text-[#3d2914] text-lg">{title}</h3>
        </div>
        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-[#c9a962] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Content area with smooth height transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-4">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-medium text-sm text-[#3d2914]">{section.title}</h4>
              <p className="text-xs text-[#5a4520] leading-relaxed mt-1">{section.content}</p>
              {section.diagram && (
                <div className="mt-3 flex justify-center">{section.diagram}</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#c9a962]/20 mt-3 pt-3 pb-4 px-4 text-xs text-center text-[#c9a962]">
          💬 命理是参考不是定数，知命是为了更好地创造人生
        </div>
      </div>
    </div>
  );
}
