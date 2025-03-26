import React from "react"
import { useQrSettings } from "../../../../store/useQrSettings"

export default function QRPreview({ qrCodeData, qrCodeFormat }) {
  const { logoSrc } = useQrSettings()

  // Placeholder when nothing to show
  if (!qrCodeData && !qrCodeFormat) {
    return (
      <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1 text-gray-500">
        Aucune prévisualisation
      </div>
    )
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1 relative">
      {qrCodeFormat ? (
        <div
          className="max-w-xs max-h-64 w-full h-full overflow-hidden flex items-center justify-center"
          dangerouslySetInnerHTML={{
            __html: qrCodeFormat
              .replace(/width="[^"]+"/, 'width="100%"')
              .replace(/height="[^"]+"/, 'height="100%"'),
          }}
        />
      ) : (
        <img
          src={qrCodeData}
          alt="QR Code Preview"
          className="max-w-xs max-h-64 object-contain"
        />
      )}

      {logoSrc && (
        <img
          src={logoSrc}
          alt="Logo Overlay"
          className="absolute"
          style={{
            width: "20%",
            height: "20%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  )
}
