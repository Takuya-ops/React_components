// DropdownList.tsx

import React, { useState } from 'react';
import './DropdownList.css';

interface Option {
  value: string;
  label: string;
}

const DropdownList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isArrowActive, setArrowActive] = useState(false);

  const options: Option[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
  };

  const arrowClassName = `select-arrow ${isArrowActive ? 'active' : ''}`;

  return (
    <div className="container">
      <h2>ドロップダウンリスト</h2>
      <div className="select-container">
        <select
          value={selectedOption?.value || ''}
          onChange={handleSelectOption}
          onFocus={() => setArrowActive(true)}
          onBlur={() => setArrowActive(false)}
        >
          <option value="">選択してください</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={arrowClassName}></div>
      </div>
      {selectedOption && <p>選択されたオプション： {selectedOption.label}</p>}
    </div>
  );
};

export default DropdownList;
