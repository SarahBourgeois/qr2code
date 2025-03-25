import React from "react";
import TextInput from "./components/TextInput";
import RangeSlider from "./components/RangeSlider";
import ColorPicker from "./components/ColorPicker";
import { useQrSettings } from "../../../store/useQrSettings"


function SettingsCard() {
  const { text, size, fgColor, bgColor, setText, setSize, setFgColor, setBgColor } = useQrSettings()


  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6  flex flex-col  h-full">
      <h2 className="text-2xl font-semibold text-blue-400">QR Code Parameters</h2>
      
      <TextInput 
        label={"Enter text or url"} 
        placeholder={"https://example.com"} 
        value={text}  
        onChange={e => setText(e.target.value)}
        />
     
      <RangeSlider 
        label="Size : " 
        min={100} 
        max={1000} 
        value={size} 
        onChange={e => setSize(+e.target.value)}
      />
     
      <div className="grid grid-cols-2 gap-4">
        <ColorPicker label="Background Color" value={bgColor} onChange={e => setBgColor(e.target.value)}/>

        <ColorPicker label="Foreground Color"  value={fgColor} onChange={e => setFgColor(e.target.value)}/>
      </div>

    </div>
  )
}

export default SettingsCard;
