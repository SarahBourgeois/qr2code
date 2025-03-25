import React from "react";
import TextInput from "./components/TextInput";
import RangeSlider from "./components/RangeSlider";
import ColorPicker from "./components/ColorPicker";
import { useSelector, useDispatch } from "react-redux"
import { setText, setSize, setFgColor, setBgColor } from "../../../store/qrSettingsSlice"


function SettingsCard() {
  const { text, size, fgColor, bgColor } = useSelector(state => state.qrSettings)
  const dispatch = useDispatch()

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6  flex flex-col  h-full">
      <h2 className="text-2xl font-semibold text-blue-400">QR Code Parameter</h2>
      
      <TextInput label={"Enter url"} placeholder={"https://example.com"} value={text}  onChange={e => dispatch(setText(e.target.value))}/>
     
      <RangeSlider label="Taille : " min={100} max={1000} value={size} onChange={e => dispatch(setSize(+e.target.value))} />
     
      <div className="grid grid-cols-2 gap-4">
        <ColorPicker label="Background Color" value={bgColor} onChange={e => dispatch(setBgColor(e.target.value))}/>

        <ColorPicker label="Color"  value={fgColor} onChange={e => dispatch(setFgColor(e.target.value))}/>
        
      </div>

    </div>
  )
}

export default SettingsCard;
