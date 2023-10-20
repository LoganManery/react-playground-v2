import React, { createContext, useState, useContext, useCallback } from 'react'
import Toast from '../components/Feedback Components/ToastNotification.tsx'

type ToastData = {
  message: string
  type?: 'info' | 'success' | 'error'
}

type ToastProviderProps = {
  children: React.ReactNode
}

type ToastContextType = {
  showToast: (data: ToastData) => void
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastData | null>(null)

  const showToast = useCallback((data: ToastData) => {
    setToast(data)
  }, [])

  return (
    <ToastContext.Provider value={({ showToast})}>
      {children}
      {toast && 
        <Toast 
          {...toast} 
          onClose={() => setToast(null)} />}
    </ToastContext.Provider>
  )
}

