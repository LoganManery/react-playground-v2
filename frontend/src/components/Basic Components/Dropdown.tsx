import React, { useState } from 'react'

interface DropdownProps {
    options: string[]
    onSelect: (selected: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white">
          <ul>
            {options.map((option, index) => ( 
            <li key={index} className="cursor-pointer hover:bg-blue-100 p-2" onClick={() => {
              onSelect(option)
              setIsOpen(false)
            }}>
              {option}
            </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown