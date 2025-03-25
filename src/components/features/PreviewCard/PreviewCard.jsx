import React from "react";
import { useState } from "react"
import QRPreview from "./components/QrPreview";
import DownloadButton from "./components/DownloadButton";
import QrFormatSelector from "./components/QrFormatSelector.jsx";
import useGenerateQRCode from "./hooks/useGenerateQRCode.js";
import { useQrSettings } from "../../../store/useQrSettings"

function PreviewCard() {
  const { text, size, fgColor, bgColor } = useQrSettings()
  const [format, setFormat] = useState("SVG")
  const { qrCodeData, qrCodeFormat } = useGenerateQRCode({ text, size, fgColor, bgColor, format })
  
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6  flex flex-col  h-full">
      <h2 className="text-2xl font-semibold text-blue-400">Preview</h2>
      <QRPreview qrCodeData={qrCodeData} qrCodeFormat={qrCodeFormat} />

      <DownloadButton onClick={() => console.log("Download", format)} />

      <QrFormatSelector selected={format} onSelect={setFormat} />

    </div>
  )
}

export default PreviewCard;



