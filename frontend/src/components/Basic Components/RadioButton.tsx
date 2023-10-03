// RadioButton.tsx
import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id, name, value, checked, onChange, label, className
}) => {
  return (
    <div className={`flex justify-center ${className || ''}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="text-blue-500 h-4 w-4 mr-2 border"
      />
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    </div>
  );
};

export default RadioButton;
