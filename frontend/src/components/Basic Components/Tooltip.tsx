import React, { useState, useRef, ReactNode } from 'react'

interface TooltipProps {
  content: string
  position?: "top" | "bottom" | "left" | "right"
  className?: string
  children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ content, position = "top", className, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const tooltipClasses = {
    top: 'bottom-full mb-2 left-1/2 transform-translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 transform-translate-x-1/2',
    left: 'right-full mr-2 top-1/2 transform-translate-y-1/2',
    right: 'left-full ml-2 top-1/2 transform-translate-y-1/2',
  }

  return (
    <div
      className={`relative bg-black ${className || ''}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={ref} 
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-10 p-2 bg-gray-700 text-white rounded text-sm whitespace-nowrap ${tooltipClasses[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip