import React from "react"

export default function LegalMention() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

      <p className="mb-4">
        Éditeur du site : <strong>Sarah Bourgeois</strong><br/>
        Adresse : Paris, France<br/>
        Email : <a href="xydisorder@gmail.com" className="underline">xydisorder@gmail.com</a>
      </p>

      <p>
      Hébergeur : Netlify, Inc.<br/>
      Adresse : 2325 3rd Street, Suite 296, San Francisco, CA 94107, États‑Unis<br/>
      Site web : <a href="https://www.netlify.com" className="underline" target="_blank" rel="noopener noreferrer">
      netlify.com
      </a>
    </p>
    </main>
  )
}

