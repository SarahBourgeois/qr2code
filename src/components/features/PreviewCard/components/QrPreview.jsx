import React from "react"

export default function QRPreview({ dataURL, svg }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1">
      {svg ? (
        <div
          className="max-w-xs max-h-64"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <img
          src={dataURL}
          alt="QR Code Preview"
          className="max-w-xs max-h-64 object-contain"
        />
      )}
    </div>
  )
}
