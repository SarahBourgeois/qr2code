import { create } from "zustand"

export const useQrSettings = create((set) => ({
  text: "https://example.com",
  size: 300,
  fgColor: "#000000",
  bgColor: "#FFFFFF",
  logoSrc: "",
  logoName: "",

  setText: (text) => set({ text }),
  setSize: (size) => set({ size }),
  setFgColor: (fgColor) => set({ fgColor }),
  setBgColor: (bgColor) => set({ bgColor }),
  setLogoSrc: (logoSrc) => set({ logoSrc }),
  setLogoName: (logoName) => set({logoName})
}))

