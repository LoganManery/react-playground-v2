import React from 'react'

interface ListProps {
  items: string[]
  ordered?: boolean
}

const List: React.FC<ListProps> = ({ items, ordered }) => {
  if (ordered) {
    return (
      <ol className="list-decimal pl-5">
        {items.map((item, index) => (
          <li key={index} className={`mb-1`}>
            {item}
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className={`mb-1`}>{item}</li>
        ))}
    </ul>
  )
}

export default List