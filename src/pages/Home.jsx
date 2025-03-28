import React from "react";
import SettingsCard from "../components/features/SettingsCard/SettingsCard";
import PreviewCard from "../components/features/PreviewCard/PreviewCard";

function Home() {
  return (
    <section className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SettingsCard className="h-full flex flex-col justify-between" />
        <PreviewCard className="h-full flex flex-col justify-between" />
      </div>
    </section>
  )
}

export default Home;