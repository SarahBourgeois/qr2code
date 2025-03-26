import { useEffect, useRef } from "react"
import QRCodeStyling from "qr-code-styling"
import { useQrSettings } from "../../../../store/useQrSettings"

export default function useQrCodeStyling(format) {
  const ref = useRef(null)
  const { text, size, fgColor, bgColor, logoSrc } = useQrSettings()

  const qr = useRef(new QRCodeStyling({
    width: size,
    height: size,
    data: text,
    image: logoSrc || "",
    dotsOptions: { color: fgColor },
    backgroundOptions: { color: bgColor },
    imageOptions: { crossOrigin: "anonymous", margin: 5 },
    qrOptions: { errorCorrectionLevel: "H" },
  })).current

  useEffect(() => {
    qr.update({ data: text, width: size, height: size, dotsOptions: { color: fgColor }, backgroundOptions: { color: bgColor }, image: logoSrc })
    qr.append(ref.current)
  }, [text, size, fgColor, bgColor, logoSrc])

  const download = () => qr.download({ extension: format.toLowerCase() })

  return { ref, download }
}
