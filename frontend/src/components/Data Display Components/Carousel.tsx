import React, { useState } from 'react'

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    setActiveIndex((oldIndex) => {
      if(oldIndex === 0) {
        return images.length - 1
      }
       return oldIndex - 1;
    })
  }

  const nextSlide =() => {
    setActiveIndex((oldIndex) => (oldIndex + 1) % images.length)
  }

  return (
    <div className="relative flex flex-col">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute self-center w-2/12 h-2/12 object-center transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`} 
        />
      ))}
      <button className="absolute p-4" onClick={prevSlide}>Prev</button>
      <button className="absolute right-0 p-4" onClick={nextSlide}>Next</button>
    </div>
  )
}

export default Carousel

