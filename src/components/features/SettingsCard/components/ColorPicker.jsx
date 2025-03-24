import { useState } from 'react'

export default function ColorPicker({ label, defaultValue }) {
  const [color, setColor] = useState(defaultValue)

  return (
    <label className="block">
      <span className="block mb-1 text-sm">{label}</span>
      <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 space-x-3">
        {/* Carré couleur */}
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          className="w-10 h-10 p-0 border-0 rounded"
        />

        {/* Texte hex */}
        <input
          type="text"
          readOnly
          value={color.toUpperCase()}
          className="flex-1 bg-transparent text-white text-sm font-medium focus:outline-none"
        />
      </div>
    </label>
  )
}
