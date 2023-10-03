interface TextareaProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
  id?: string
  className?: string  
  label?: string
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, placeholder, rows = 3, id, className, label}) => {
  return (
    <div className="flex flex-col w-screen">
      {label && <label htmlFor={id} className="black text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`p-2 border rounded-md w-1/2 m-auto ${className} || ''}`}
      />
    </div>
  )
}

export default Textarea