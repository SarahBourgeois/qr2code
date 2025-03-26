import { create } from "zustand"

export const useQrSettings = create((set) => ({
  text: "https://example.com",
  size: 300,
  fgColor: "#000000",
  bgColor: "#FFFFFF",
  logoSrc: "",
  logoName: "",
  cornerType: "square", 
  dotType: "square",
  errorLevel: "M",

  setText: (text) => set({ text }),
  setSize: (size) => set({ size }),
  setFgColor: (fgColor) => set({ fgColor }),
  setBgColor: (bgColor) => set({ bgColor }),
  setLogoSrc: (logoSrc) => set({ logoSrc }),
  setLogoName: (logoName) => set({logoName}),
  setCornerType: (cornerType) => set({cornerType}),
  setDotType: (dotType) => set({dotType}),
  setErrorLevel: (errorLevel) => set({errorLevel})
}))

