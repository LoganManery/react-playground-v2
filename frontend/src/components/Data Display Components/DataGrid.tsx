import React from 'react'

type Data = Record<string, number | string | boolean | null>[]

interface Column {
  key: string
  header: string
  width?: string
}

interface DataGridProps {
  columns: Column[]
  data: Data
}

const DataGrid: React.FC<DataGridProps> = ({ columns, data }) => {
  return (
    <div className="border border-gray-300">
      <div className={`grid grid-cols-${columns.length} bg-gray-200 p-2`}>
        {columns.map((col) => (
          <div key={col.key} style={{width: col.width}} className="font-semibold">{col.header}</div>
        ))}
      </div>
      <div>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className={`grid grid-cols-${columns.length} border-t`}>
            {columns.map((col) => (
              <div key={col.key} className="grid grid-cols-3 p-2" style={{ width: col.width }}>
                {row[col.key]}
              </div>
            ))}
          </div>
        ))}
        </div>
    </div>
  )
}

export default DataGrid