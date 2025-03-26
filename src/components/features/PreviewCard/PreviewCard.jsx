import React, { useState, useRef, useEffect } from "react"
import QRCodeStyling from "qr-code-styling"
import DownloadButton from "./components/DownloadButton"
import QrFormatSelector from "./components/QrFormatSelector"
import { useQrSettings } from "../../../store/useQrSettings"

export default function PreviewCard() {
  const { text, size, fgColor, bgColor, logoSrc } = useQrSettings()
  const [format, setFormat] = useState("PNG")
  const qrRef = useRef(null)
  const PREVIEW_SIZE = 300

  const qr = useRef(new QRCodeStyling({
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    data: text,
    image: logoSrc,
    dotsOptions: { color: fgColor },
    backgroundOptions: { color: bgColor },
    imageOptions: { crossOrigin: "anonymous", margin: 5 },
    qrOptions: { errorCorrectionLevel: "H" }
  })).current

  useEffect(() => {
    qr.update({
      data: text,
      width: PREVIEW_SIZE,
      height: PREVIEW_SIZE,
      dotsOptions: { color: fgColor },
      backgroundOptions: { color: bgColor },
      image: logoSrc
    })
    qr.append(qrRef.current)
  }, [text, fgColor, bgColor, logoSrc])

  const handleDownload = () => {
    const exporter = new QRCodeStyling({
      width: size,
      height: size,
      data: text,
      image: logoSrc,
      dotsOptions: { color: fgColor },
      backgroundOptions: { color: bgColor },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      qrOptions: { errorCorrectionLevel: "H" }
    })
    exporter.download({ extension: format.toLowerCase() })
  }

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full space-y-6">
      <h2 className="text-2xl font-semibold text-blue-400">Aperçu</h2>
      <div ref={qrRef} className="self-center" />
      <DownloadButton onClick={handleDownload} />
      <QrFormatSelector selected={format} onSelect={setFormat} />
    </div>
  )
}
