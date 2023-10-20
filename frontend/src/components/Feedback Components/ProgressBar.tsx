import React from 'react'

type ProgressBarProps = {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }: ProgressBarProps) => {
  return (
    <>
    <div className="progress-container w-full bg-red-600 rounded-md overflow-hidden">
      <div className="progress-bar h-5 bg-blue-700 w-0" style={{ width: `${progress}%` }}></div>
    </div>
  </> 
  )
}

export default ProgressBar