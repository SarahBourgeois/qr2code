import React from "react"

const FORMATS = ["PNG", "SVG", "PDF"]

export default function QrFormatSelector({ selected = "SVG", onSelect }) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {FORMATS.map(fmt => (
        <button
          key={fmt}
          onClick={() => onSelect(fmt)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition
            ${fmt === selected
              ? "bg-gray-900 text-white ring-2 ring-blue-400"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }
          `}
        >
          {fmt}
        </button>
      ))}
    </div>
  )
}
