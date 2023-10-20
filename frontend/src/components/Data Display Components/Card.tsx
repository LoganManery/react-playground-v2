import React from 'react'

interface CardProps {
  title?: string
  imageSrc?: string
  description?: string
  footerContent?: React.ReactNode
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, footerContent, children }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm max-w-sm">
      {imageSrc && <img src={imageSrc} alt={title || "Card Image"} className="w-full h-48 object-cover" />}
      <div className="p-4">
        {title && <h2 className="font-bold text-lg mb-2">{title}</h2>}
        {description && <p className="text-gray-700">{description}</p>}
        {children}
      </div>
      {footerContent && <div className="border-t p-4">{footerContent}</div>}
    </div>
  )
}

export default Card