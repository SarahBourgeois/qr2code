import React from "react";
import { useState } from "react"
import QRPreview from "./components/QrPreview";
import DownloadButton from "./components/DownloadButton";
import QrFormatSelector from "./components/QrFormatSelector.jsx";
import { useSelector } from "react-redux"
import useGenerateQRCode from "./hooks/useGenerateQRCode.js";

function PreviewCard() {
  const { text, size, fgColor, bgColor } = useSelector(state => state.qrSettings)
  const [format, setFormat] = useState("PNG")
  const { dataURL, svg } = useGenerateQRCode({ text, size, fgColor, bgColor, format })

  console.log(dataURL)
  
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6  flex flex-col  h-full">
      <h2 className="text-2xl font-semibold text-blue-400">Preview</h2>
      <QRPreview dataURL={dataURL} svg={svg} />

      <DownloadButton onClick={() => console.log("Download", format)} />

      <QrFormatSelector selected={format} onSelect={setFormat} />

    </div>
  )
}

export default PreviewCard;



