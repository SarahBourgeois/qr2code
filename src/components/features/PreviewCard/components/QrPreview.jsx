import React from "react"

export default function QRPreview({ src, alt = "QR Preview" }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1">
      <img
        src={src}
        alt={alt}
        className="max-w-xs max-h-64 object-contain"
      />
    </div>
  )
}