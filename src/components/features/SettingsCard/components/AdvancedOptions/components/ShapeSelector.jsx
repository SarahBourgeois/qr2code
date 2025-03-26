import React from 'react'
import { useQrSettings } from '../../../../../../store/useQrSettings'

const shapes = ['square','dots','rounded','extra-rounded']
export default function ShapeSelector() {
  const { dotType, setDotType } = useQrSettings()
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Forme des modules</h3>
      <div className="flex gap-2">
        {shapes.map(type => (
          <button key={type} onClick={() => setDotType(type)} className={`px-3 py-1 rounded ${dotType===type ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>{type}</button>
        ))}
      </div>
    </div>
  )
}