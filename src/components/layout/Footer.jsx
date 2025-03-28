import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        
        {/* Left : name + copyright */}
        <p className="text-sm opacity-75">
          © {new Date().getFullYear()} Qr2code — Tous droits réservés
        </p>

        {/* Center : legal  */}
        <nav className="flex flex-wrap gap-6 text-sm">
        <a href="/" className="hover:underline">Home</a>
        <a href="/mentions-legales" className="hover:underline">Mentions Légales</a>
        <a href="/politique-confidentialite" className="hover:underline">Politique de Confidentialité</a>
        </nav>

        {/* right : GitHub link*/}
        <a
          href="https://github.com/XyDisorder/qr2code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-400 transition"
          aria-label="Qr2code sur GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
