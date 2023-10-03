interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  id?: string
  className?: string  
  label?: string
  type?: string
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, id, className, label, type}) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`p-2 border rounded-md w-1/2 ${className} || ''}`}
       />
    </div>
  )
}

export default Input