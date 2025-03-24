# Qr2code

<p align="center">
  <img src="./src/assets/qr2code.svg" alt="Qr2code Logo" width="350">
</p>

<p align="center">
  Une application moderne de génération de QR codes développée avec React
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/react-18.2.0-61DAFB" alt="React">
</p>

## 📋 À propos

Qr2code est une application web moderne qui vous permet de créer facilement des QR codes personnalisés. Conçue avec une architecture React optimisée et une interface utilisateur intuitive en mode sombre, cette application offre des fonctionnalités avancées de personnalisation tout en restant simple d'utilisation.

## ✨ Fonctionnalités

- ✅ Génération de QR codes à partir de texte, URLs, ou données structurées
- ✅ Personnalisation des couleurs (premier plan et arrière-plan)
- ✅ Ajustement de la taille et de la précision des QR codes
- ✅ Téléchargement des QR codes au format PNG, SVG et PDF
- ✅ Interface utilisateur moderne avec support du mode sombre
- ✅ Prévisualisation en temps réel
- ✅ Sauvegarde des QR codes récemment générés

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14.0.0 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le dépôt
```bash
git clone https://github.com/votre-username/qr2code.git
cd qr2code
```

2. Installez les dépendances
```bash
npm install
# ou
yarn install
```

3. Lancez l'application en mode développement
```bash
npm run dev
# ou
yarn dev
```

4. Ouvrez votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

## 🏗️ Architecture du projet

```
qr2code/
├── public/                   # Fichiers statiques
│   ├── index.html            # Template HTML principal
│   └── favicon.svg           # Favicon
├── src/                      # Code source
│   ├── assets/               # Images, polices, etc.
│   │   └── logo.svg          # Logo Qr2code
│   ├── components/           # Composants réutilisables
│   │   ├── common/           # Composants génériques
│   │   └── layout/           # Composants de mise en page
│   ├── features/             # Fonctionnalités principales
│   │   └── qrcode/           # Fonctionnalité QR code
│   │       ├── components/   # Composants spécifiques
│   │       ├── hooks/        # Hooks personnalisés
│   │       └── utils/        # Fonctions utilitaires
│   ├── hooks/                # Hooks réutilisables
│   ├── utils/                # Fonctions utilitaires génériques
│   ├── App.jsx               # Composant racine
│   └── index.jsx             # Point d'entrée
├── .gitignore                # Fichiers ignorés par Git
├── package.json              # Dépendances et scripts
├── README.md                 # Documentation du projet
└── tailwind.config.js        # Configuration Tailwind
```

## 🧩 Composants principaux

### QRCodeGenerator
Le composant principal qui coordonne la génération de QR codes.

### QRCodeForm
Gère les entrées utilisateur et les paramètres de personnalisation.

### QRCodePreview
Affiche le QR code généré avec des options de téléchargement.

## 🛠️ Développé avec

- [React](https://reactjs.org/) - Bibliothèque JavaScript pour construire l'interface utilisateur
- [Vite](https://vitejs.dev/) - Outil de build ultra-rapide
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [Google Charts API](https://developers.google.com/chart/infographics/docs/qr_codes) - Pour la génération des QR codes

## 📝 Guide de contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add some amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📄 Licence

Distribué sous licence MIT. Voir `LICENSE` pour plus d'informations.

## 📊 Roadmap

- [ ] Support des QR codes pour vCards et autres formats structurés
- [ ] Ajout de logos personnalisés au centre des QR codes
- [ ] Styles de QR codes avec formes arrondies
- [ ] Export vers plus de formats (JPEG, WebP)
- [ ] Support de QR codes dynamiques avec statistiques de scan
- [ ] Mode hors-ligne complet avec PWA

## 📬 Contact

Créé par [Votre Nom] - [@votre-twitter](https://twitter.com/votre-twitter) - email@example.com

Lien du projet: [https://github.com/votre-username/qr2code](https://github.com/votre-username/qr2code)