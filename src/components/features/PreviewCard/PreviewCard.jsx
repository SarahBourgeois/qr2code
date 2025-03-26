import React, { useState, useRef, useEffect } from "react"
import QRCodeStyling from "qr-code-styling"
import DownloadButton from "./components/DownloadButton"
import QrFormatSelector from "./components/QrFormatSelector"
import { useQrSettings } from "../../../store/useQrSettings"

export default function PreviewCard() {
  const { text, size, fgColor, bgColor, logoSrc, frameSrc, dotType, cornerType, errorLevel } = useQrSettings()
  const [format, setFormat] = useState("PNG")
  const qrRef = useRef(null)
  const PREVIEW_SIZE = 300
  const defaultErrorLevel = errorLevel || "H"

  const qr = useRef(new QRCodeStyling({
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    data: text,
    image: logoSrc,
    dotsOptions: { color: fgColor, type: dotType },
    cornersSquareOptions: { type: cornerType },
    cornersDotOptions: { type: cornerType },
    backgroundOptions: { color: bgColor },
    imageOptions: { crossOrigin: "anonymous", margin: 5 },
    qrOptions: { errorCorrectionLevel: defaultErrorLevel }
  })).current

  useEffect(() => {
    qr.update({
      data: text,
      width: PREVIEW_SIZE,
      height: PREVIEW_SIZE,
      dotsOptions: { color: fgColor, type: dotType },
      cornersSquareOptions: { type: cornerType },
      cornersDotOptions: { type: cornerType },
      backgroundOptions: { color: bgColor },
      image: logoSrc,
      qrOptions: { errorCorrectionLevel: defaultErrorLevel }
    })
    qr.append(qrRef.current)
  }, [text, fgColor, bgColor, logoSrc, dotType, cornerType, defaultErrorLevel])

  const handleDownload = () => {
    const exporter = new QRCodeStyling({
      width: size,
      height: size,
      data: text,
      image: logoSrc,
      dotsOptions: { color: fgColor, type: dotType },
      cornersSquareOptions: { type: cornerType },
      cornersDotOptions: { type: cornerType },
      backgroundOptions: { color: bgColor },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      qrOptions: { errorCorrectionLevel: defaultErrorLevel }
    })
    exporter.download({ extension: format.toLowerCase() })
  }

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full space-y-6">
      <h2 className="text-2xl font-semibold text-blue-400">Aperçu</h2>
      <div className="relative self-center">
        <div ref={qrRef} />
        {frameSrc && (
          <img
            src={frameSrc}
            alt="Frame overlay"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />
        )}
      </div>
      <DownloadButton onClick={handleDownload} />
      <QrFormatSelector selected={format} onSelect={setFormat} />
    </div>
  )
}
