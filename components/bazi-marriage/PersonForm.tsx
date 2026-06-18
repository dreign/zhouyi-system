'use client';

interface PersonFormProps {
  label: string;
  colorClass: string;
  formData: { name: string; year: number; month: number; day: number; hour: number };
  onChange: (data: Partial<PersonFormProps['formData']>) => void;
}

export default function PersonForm({ label, colorClass, formData, onChange }: PersonFormProps) {
  return (
    <div className={`rounded-xl p-5 border ${colorClass}`}>
      <h3 className="font-bold text-lg mb-4 text-center">{label}</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-xs text-[#5a4520] mb-1">姓名（选填）</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => onChange({ name: e.target.value })}
            placeholder="请输入姓名"
            className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg bg-[#faf5e8] text-[#3d2914] text-sm placeholder-[#5a4520]/50"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-[#5a4520] mb-1">出生年份</label>
            <input
              type="number"
              value={formData.year || ''}
              onChange={e => onChange({ year: parseInt(e.target.value) || 0 })}
              placeholder="如 1990"
              className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg bg-[#faf5e8] text-[#3d2914] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[#5a4520] mb-1">月份</label>
            <input
              type="number"
              value={formData.month || ''}
              onChange={e => onChange({ month: parseInt(e.target.value) || 0 })}
              placeholder="1-12"
              className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg bg-[#faf5e8] text-[#3d2914] text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-[#5a4520] mb-1">日期</label>
            <input
              type="number"
              value={formData.day || ''}
              onChange={e => onChange({ day: parseInt(e.target.value) || 0 })}
              placeholder="1-31"
              className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg bg-[#faf5e8] text-[#3d2914] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[#5a4520] mb-1">时辰</label>
            <select
              value={formData.hour}
              onChange={e => onChange({ hour: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg bg-[#faf5e8] text-[#3d2914] text-sm"
            >
              <option value={0}>子时 (23:00-00:59)</option>
              <option value={2}>丑时 (01:00-02:59)</option>
              <option value={4}>寅时 (03:00-04:59)</option>
              <option value={6}>卯时 (05:00-06:59)</option>
              <option value={8}>辰时 (07:00-08:59)</option>
              <option value={10}>巳时 (09:00-10:59)</option>
              <option value={12}>午时 (11:00-12:59)</option>
              <option value={14}>未时 (13:00-14:59)</option>
              <option value={16}>申时 (15:00-16:59)</option>
              <option value={18}>酉时 (17:00-18:59)</option>
              <option value={20}>戌时 (19:00-20:59)</option>
              <option value={22}>亥时 (21:00-22:59)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
