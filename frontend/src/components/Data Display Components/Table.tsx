import React from 'react'

type Data = Record<string, number | string | boolean | null>[]

interface TableColumn {
  key: string
  header: string
}

interface TableProps {
  columns: TableColumn[]
  data: Data
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className={`border px-4 py-2 bg-gray-200 font-semybold`}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col.key} className={`border px-4 py-2`}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table