// src/utils/downloadQR.js
import { jsPDF } from "jspdf"

export function downloadQRCode({ format, size, qrCodeData, qrCodeFormat }) {
  const filename = `qr2code.${format.toLowerCase()}`;
  const link = document.createElement("a");
  let url;

  switch (format) {
    case "PDF":
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [size, size],
      });
      pdf.addImage(qrCodeData, "PNG", 0, 0, size, size);
      pdf.save(filename);
      return; // Pas besoin de continuer car jsPDF gère le téléchargement

    case "SVG":
      const svgBlob = new Blob([qrCodeFormat], { type: "image/svg+xml" });
      url = URL.createObjectURL(svgBlob);
      break;

    default: // PNG ou autres formats
      url = qrCodeData;
      break;
  }

  // Logique commune de téléchargement pour SVG et PNG
  try {
    link.href = url;
    link.download = filename;
    link.style.display = "none"; // Cache le lien
    document.body.appendChild(link);
    link.click();
  } finally {
    // Nettoyage dans tous les cas
    setTimeout(() => {
      document.body.removeChild(link);
      if (url !== qrCodeData) URL.revokeObjectURL(url);
    }, 100);
  }
}