import React from "react"
import { useQrSettings } from "../../../../../../store/useQrSettings";
import ColorPicker from "../../../../../common/ColorPicker";

export function CornerColorSelector() {
const { cornerSquareColor, cornerDotColor, setCornerSquareColor, setCornerDotColor } = useQrSettings();
 
return (
  <div>
   <h3 className="text-sm font-semibold mb-2">Couleurs des coins</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <ColorPicker label="coins internes" 
                value={cornerDotColor} 
                onChange={e => setCornerDotColor(e.target.value)}/>

      <ColorPicker label="coins externes"  
                value={cornerSquareColor} 
                onChange={e => setCornerSquareColor(e.target.value)
                }/>
    </div>
    </div>
)


}

