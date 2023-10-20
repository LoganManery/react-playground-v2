import React from 'react'

interface ModalProps {
  title?: string
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({title, isOpen, onClose, children}: ModalProps) => {
  if(!isOpen) return null

  return (
      <div className={`flex fixed items-center justify-center z-50 top-0 left-0 w-full h-full`}>
        <div className={`bg-black opacity-50 absolute w-full h-full`} onClick={onClose}></div>
        <div className="relative bg-white rounded-lg w-96 p-6 z-10">
          {title && <h2 className={`text-xl font-bold mb-4`}>{title}</h2>}
          {children}
          <button onClick={onClose} className={`absolute top-4 right-4 text-lg`}>
            &times;
          </button>
        </div>
      </div>
  )
}
export default Modal

