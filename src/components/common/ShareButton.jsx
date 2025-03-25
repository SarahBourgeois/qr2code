import { useState, useCallback } from "react"
import { dataURLtoFile } from "../../utils/dataURLtoFile"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share"
import { FaTiktok, FaInstagram } from "react-icons/fa"

// Fonction simple pour détecter si on est sur mobile
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

export default function ShareButton({ shareUrl, shareTitle, qrCodeData }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleNativeShare = useCallback(async () => {
    try {
      // Convertir le dataURL en File
      const file = dataURLtoFile(qrCodeData, "qr-code.png")
      // Vérifier si l'API peut partager ce fichier
      if (navigator.canShare && file && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: shareTitle,
          text: shareTitle,
          files: [file]
        })
        return
      }
    } catch (error) {
      console.error("Erreur lors du partage natif:", error)
    }
    // Si partage natif impossible, on active le menu fallback
    setShowMenu(true)
  }, [shareTitle, qrCodeData])

  const handleClick = () => {
    // Sur mobile et si l'API Web Share pour fichiers est disponible, on l'utilise
    if (isMobileDevice() && navigator.share && navigator.canShare) {
      handleNativeShare()
    } else {
      // Sinon, on bascule l'affichage du menu déroulant
      setShowMenu(prev => !prev)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 text-sm font-medium transition"
      >
        Share
      </button>

      {showMenu && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg p-2 z-50 flex flex-col gap-2">
          {/* WhatsApp */}
          <WhatsappShareButton url={shareUrl} title={shareTitle}>
            <div className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700">
              <WhatsappIcon size={24} round />
              <span>WhatsApp</span>
            </div>
          </WhatsappShareButton>

          {/* Twitter */}
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <div className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700">
              <TwitterIcon size={24} round />
              <span>Twitter</span>
            </div>
          </TwitterShareButton>

          {/* Facebook */}
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <div className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700">
              <FacebookIcon size={24} round />
              <span>Facebook</span>
            </div>
          </FacebookShareButton>

          {/* TikTok */}
          <a
            href={`https://www.tiktok.com/share?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700"
          >
            <FaTiktok size={24} />
            <span>TikTok</span>
          </a>

          {/* Instagram */}
          <a
            href={`https://instagram.com/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700"
          >
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>
        </div>
      )}
    </div>
  )
}
