import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout/Layout.jsx';
import LegalMention from "./pages/LegalMention.jsx";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mentions-legales" element={<LegalMention />} />
          <Route path="politique-confidentialite" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

