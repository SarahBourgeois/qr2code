# Qr2code

<p align="center">
  <img src="./src/assets/qr2code.svg" alt="Qr2code Logo" width="350">
</p>

<p align="center">
  A modern QR code generator application built with React
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/react-18.2.0-61DAFB" alt="React">
</p>

## 📋 About

Qr2code is a modern web application that makes it easy to create custom QR codes. Built with an optimized React architecture and a sleek dark-mode interface, this app delivers advanced customization options while remaining user-friendly.


Website : https://qr2code.netlify.app/


## ✨ Features

- ✅ Generate QR codes from text, URLs, or structured data
- ✅ Customize foreground and background colors
- ✅ Adjust QR code size and error correction level
- ✅ Download QR codes as PNG, SVG, or PDF
- ✅ Modern user interface with dark mode support
- ✅ Real-time preview
- ✅ Save recently generated QR codes

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/qr2code.git
cd qr2code
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser to [http://localhost:5173](http://localhost:5173)

## 🏗️ Project Structure

```
qr2code/
├── public/                   # Static files
│   ├── index.html            # Main HTML template
│   └── favicon.svg           # Favicon
├── src/                      # Source code
│   ├── assets/               # Images, fonts, etc.
│   │   └── logo.svg          # Qr2code logo
│   ├── components/           # Reusable components
│   │   ├── common/           # Generic components
│   │   └── layout/           # Layout components
│   ├── features/             # Core features
│   │       ├── components/   # Feature-specific components
│   │       ├── hooks/        # Custom hooks
│   │       └── utils/        # Utility functions
│   ├── hooks/                # Shared hooks
│   ├── utils/                # Generic utility functions
│   ├── App.jsx               # Root component
│   └── index.jsx             # Entry point
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🧩 Main Components

### QRCodeGenerator

The main component that orchestrates QR code generation.

### QRCodeForm

Handles user inputs and customization settings.

### QRCodePreview

Displays the generated QR code with download options.

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Charts API](https://developers.google.com/chart/infographics/docs/qr_codes) - For QR code generation

## 📝 Contribution Guide

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📊 Roadmap

- [ ] Support QR codes for vCards and other structured formats
- [ ] Add custom logos to the center of QR codes
- [ ] QR code styles with rounded shapes
- [ ] Export to more formats (JPEG, WebP)
- [ ] Support dynamic QR codes with scan analytics
- [ ] Full offline mode with PWA

## 📬 Contact

Created by XyDisorder - xydisorder@gmail.com

Project Link: [https://github.com/XyDisorder/qr2code](https://github.comXyDisorder/qr2code)

