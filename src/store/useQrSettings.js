import { create } from "zustand"

export const useQrSettings = create((set) => ({
  text: "https://example.com",
  size: 200,
  fgColor: "#000000",
  bgColor: "#FFFFFF",

  setText: (text) => set({ text }),
  setSize: (size) => set({ size }),
  setFgColor: (fgColor) => set({ fgColor }),
  setBgColor: (bgColor) => set({ bgColor }),
}))

