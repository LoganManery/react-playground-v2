import React from 'react'

interface LabelProps {
    text: string
    htmlFor: string
    className?: string
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
    return (
        <label className={`flex flex-col ${className} || ' ' }`} htmlFor={htmlFor}>
            {text}
        </label>
    )
}

export default Label;