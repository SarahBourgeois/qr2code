import { FiFolder } from "react-icons/fi"
import { useQrSettings } from "../../../../store/useQrSettings"

export default function LogoFilePicker() {
  const setLogoSrc = useQrSettings(state => state.setLogoSrc)
  const setLogoName = useQrSettings(state => state.setLogoName)

  const handleFile = e => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setLogoSrc(reader.result)
      setLogoName(file.name)
    }
    reader.readAsDataURL(file)
  }

  return (
    <label className="h-12 w-12 bg-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-500 transition">
      <FiFolder className="text-white" size={24} />
      <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </label>
  )
}
