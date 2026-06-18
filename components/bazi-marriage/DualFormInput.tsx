'use client';

import PersonForm from './PersonForm';

interface PersonData {
  name: string;
  year: number;
  month: number;
  day: number;
  hour: number;
}

interface DualFormInputProps {
  maleData: PersonData;
  femaleData: PersonData;
  onMaleChange: (data: Partial<PersonData>) => void;
  onFemaleChange: (data: Partial<PersonData>) => void;
  onSubmit: () => void;
  loading: boolean;
}

export default function DualFormInput({ maleData, femaleData, onMaleChange, onFemaleChange, onSubmit, loading }: DualFormInputProps) {
  const isValid = maleData.year && maleData.month && maleData.day && femaleData.year && femaleData.month && femaleData.day;
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#3d2914] mb-4 text-center">
        <span className="text-[#c9a962]">◇</span> 输入双方生辰 <span className="text-[#c9a962]">◇</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <PersonForm
          label="男方信息"
          colorClass="border-blue-200 bg-gradient-to-br from-blue-50/50 to-transparent"
          formData={maleData}
          onChange={onMaleChange}
        />
        <PersonForm
          label="女方信息"
          colorClass="border-pink-200 bg-gradient-to-br from-pink-50/50 to-transparent"
          formData={femaleData}
          onChange={onFemaleChange}
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={!isValid || loading}
        className="w-full py-3 bg-gradient-to-r from-[#8b2500] to-[#d44a4a] text-white font-bold text-lg rounded-xl hover:from-[#6e1e00] hover:to-[#b33a3a] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg border border-[#c9a962]/30"
      >
        {loading ? '测算中...' : '开始合婚'}
      </button>
    </div>
  );
}
