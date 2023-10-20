import React from 'react'

type ToastProps = {
  message: string
  type?: 'info' | 'success' | 'error'
  onClose: () => void
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose}) => {
  let bgColor = ''

  switch (type) {
    case 'success':
      bgColor = 'bg-green-500'
      break
    case 'error':
      bgColor = 'bg-red-500'
      break
    default:
      bgColor = 'bg-blue-500'
  }

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md ${bgColor} text-white`}>
      <div className={`flex justify-between`}>
        <div>{message}</div>
        <button onClick={onClose} className={`ml-2`}>
          x
        </button>
      </div>
    </div>
  )
}

export default Toast