import React from "react"
import { FiX } from "react-icons/fi"
import LogoUrlInput from "./components/LogoUrlInput"
import LogoFilePicker from "./components/LogoFilePicker"
import { useQrSettings } from "../../../store/useQrSettings"

export default function UploadLogo() {
  const { logoName, setLogoSrc, setLogoName } = useQrSettings()

  const clear = () => {
    setLogoSrc("")
    setLogoName("")
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-blue-400 mb-3">Logo</h2>

      {logoName ? (
        <div className="flex items-center space-x-3">
          <p className="flex-1 text-white">{logoName}</p>
          <button
            onClick={clear}
            className="h-12 w-12 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-500 transition"
            aria-label="Supprimer le logo"
          >
            <FiX size={24} className="text-white" />
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <LogoUrlInput />
          <LogoFilePicker />
        </div>
      )}
    </div>
  )
}
