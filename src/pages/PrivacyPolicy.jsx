import React from "react"

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
      <p className="mb-4">
        Qr2code ne collecte aucune donnée personnelle identifiable. Aucune information ne
        est stockée ou partagée. Le service se limite à générer et télécharger des QR codes
        directement dans votre navigateur.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
      <p>
        Ce site utilise uniquement des cookies strictement nécessaires au fonctionnement de votre session. 
        Aucun cookie tiers ou traceur analytique n’est déposé.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification et de suppression de vos données. 
        Comme aucune donnée personnelle n’est collectée, ces droits n’ont pas d’application pratique.
      </p>
      <p className="mt-4">
        Pour toute question, contactez-moi à <a href="mailto:xydisorder@gmail.com" className="underline">xydisorder@gmail.com</a>.
      </p>
    </main>
  )
}
