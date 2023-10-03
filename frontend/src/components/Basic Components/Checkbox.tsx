import React from 'react';

// Define the props
interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    className?: string;
}

// Component Implementation
const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    label,
    className = ''
}) => {
    return (
        <label className={`flex justify-center items-center cursor-pointer ${className}`}>
            <input
                type="checkbox"
                className="m-2"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
            />
            {label && <span className=''>{label}</span>}
        </label>
    );
};

export default Checkbox;
