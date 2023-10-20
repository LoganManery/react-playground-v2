import React, { useState } from 'react'

interface AccordionItem {
  header: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div>
      {items.map((item: AccordionItem, index: number) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left py-2 px-4"
            onClick={() => toggleItem(index)}
          >
            {item.header}
          </button>
          {activeIndex === index && (
            <div>
              {item.content}
            </div>
          )}
          </div>
      ))}
    </div>
  )
}

export default Accordion;