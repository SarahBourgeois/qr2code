
import React from "react"
import Layout from './components/layout/Layout.jsx';
import Qr2Code from "./components/features/Qr2Code.jsx";

function App() {

  return (
    <Layout>
      {/* Votre contenu principal ici */}
      <div>
        {
          <Qr2Code />
        }
      </div>
    </Layout>
  );
}

export default App;
