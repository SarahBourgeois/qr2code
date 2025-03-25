import React from "react"
import { useState, useEffect } from "react"
import QRCode from "qrcode"

export default function useGenerateQRCode({ text, size, fgColor, bgColor, format }) {
  const [dataURL, setDataURL] = useState("")
  const [svg, setSvg] = useState("")

  useEffect(() => {
    if (!text) return

    console.log(text)
    const options = {
      width: size,
      color: { dark: fgColor, light: bgColor }
    }

    if (format === "SVG") {
      QRCode.toString(text, { ...options, type: "svg" })
        .then(setSvg)
        .catch(console.error)
    } else {
      QRCode.toDataURL(text, options)
        .then(setDataURL)
        .catch(console.error)
    }
  }, [text, size, fgColor, bgColor, format])

  return { dataURL, svg }
}
