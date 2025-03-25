import React from 'react'
import { useState } from 'react'

export default function AdvancedToggle() {
  const [open, setOpen] = useState(false)
  return (
    <button 
      onClick={() => setOpen(!open)}
      className="w-full bg-gray-700 text-white rounded py-2">
      {open ? '▲ Options avancées' : '▼ Options avancées'}
    </button>
  )
}