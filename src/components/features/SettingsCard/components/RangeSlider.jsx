import React from "react";
import { useState } from 'react'

export default function RangeSlider({ label, min, max, defaultValue }) {
  const [value, setValue] = useState(defaultValue)

  return (
    <label className="block" > 
      <span className="block mb-1 text-sm">{label} {value}px</span>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={e => setValue(e.target.value)}
        className="w-full"
      />

 
    </label>
  )
}