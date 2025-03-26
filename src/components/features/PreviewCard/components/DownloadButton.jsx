import React from "react";

export default function DownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 transition"
    >
      Télécharger
    </button>
  )
}