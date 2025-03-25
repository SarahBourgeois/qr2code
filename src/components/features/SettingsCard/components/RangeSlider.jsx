import React from "react";

export default function RangeSlider({ label, min, max, value, onChange }) {

  return (
    <label className="block" > 
      <span className="block mb-1 text-sm">{label} {value}px</span>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={onChange}
        className="w-full"
      />

 
    </label>
  )
}