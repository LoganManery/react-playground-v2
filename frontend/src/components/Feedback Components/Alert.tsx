import React from 'react'

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  message: string
  onClose?: () => void
}

const Alert: React.FC<AlertProps> = ({ type = 'info', message, onClose }) => {
  const backgroundColors = {
    info: 'bg-blue-200',
    success: 'bg-green-200',
    warning: 'bg-yellow-200',
    error: 'bg-red-200',
  }

  const textColors = {
    info: 'text-blue-800',
    success: 'text-green-800',
    warning: 'text-yellow-800',
    error: 'text-red-800',
  }

  return (
    <div className={`absolute p-4 rounded ${backgroundColors[type]} ${textColors[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button
          className={`absolute top-2 right-2 text-lg`}
          onClick={onClose}
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default Alert