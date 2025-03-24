import React from "react";
import TextInput from "./components/TextInput";
import RangeSlider from "./components/RangeSlider";
import ColorPicker from "./components/ColorPicker";


function SettingsCard() {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-400">Paramètres du QR Code</h2>
      
      <TextInput label={"Enter url"} placeholder={"https://example.com"} />
     
      <RangeSlider label="Taille : " min={100} max={1000} defaultValue={200} />
     
      <div className="grid grid-cols-2 gap-4">
        <ColorPicker label="Background Color" defaultValue="#FFFFFF" />

        <ColorPicker label="Color" defaultValue="#000000" />
        
      </div>

    </div>
  )
}

export default SettingsCard;
