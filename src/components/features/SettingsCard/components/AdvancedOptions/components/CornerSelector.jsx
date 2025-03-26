import React from 'react'
import { useQrSettings } from '../../../../../../store/useQrSettings'

const corners = ['square','dot']
export default function CornerSelector() {
  const { cornerType, setCornerType } = useQrSettings()
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Forme des coins</h3>
      <div className="flex gap-2">
        {corners.map(type => (
          <button key={type} onClick={() => setCornerType(type)} className={`px-3 py-1 rounded ${cornerType===type ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>{type}</button>
        ))}
      </div>
    </div>
  )
}