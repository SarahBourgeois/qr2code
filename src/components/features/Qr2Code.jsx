import React from "react";
import SettingsCard from "./SettingsCard/SettingsCard";

function Qr2Code() {
  return (
    <section className="container mx-auto px-4 mt-8">
    <div className="flex flex-col md:flex-row gap-6">
        {/* Colonne gauche = 50% */}
      <div className="w-full md:w-1/2">
        <SettingsCard />
      </div>
        {/* Colonne droit = 50% */}
      <div className="w-full md:w-1/2">
      <SettingsCard />
      </div>
    </div>
  </section>
  )
}

export default Qr2Code;