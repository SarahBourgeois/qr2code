import React from 'react'
import { useQrSettings } from '../../../../../../store/useQrSettings'

const levels = ['L','M','Q','H']
export default function LevelSelector() {
  const { errorLevel, setErrorLevel } = useQrSettings()
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Niveau d'erreur</h3>
      <div className="flex gap-2">
        {levels.map(lvl => (
          <button key={lvl} onClick={() => setErrorLevel(lvl)} className={`px-3 py-1 rounded ${errorLevel===lvl ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>{lvl}</button>
        ))}
      </div>
    </div>
  )
}
