import React from "react"


export default function QRPreview({ qrCodeData, qrCodeFormat }) {
  // Si aucune donnée n'est présente, retourne un placeholder
  if (!qrCodeData && !qrCodeFormat) {
    return (
      <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1 text-gray-500">
        Aucune prévisualisation
      </div>
    )
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1">
      {qrCodeFormat ? (
        <div
          className="max-w-xs max-h-64 w-full h-full overflow-hidden flex items-center justify-center"
          // Remplace les attributs width/height pour que le SVG prenne 100% de la taille du conteneur
          dangerouslySetInnerHTML={{
            __html: qrCodeFormat
              .replace(/width="[^"]+"/, 'width="100%"')
              .replace(/height="[^"]+"/, 'height="100%"')
          }}
        />
      ) : (
        <img
          src={qrCodeData}
          alt="QR Code Preview"
          className="max-w-xs max-h-64 object-contain"
        />
      )}
    </div>
  )
}
