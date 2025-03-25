import React from "react"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  text: "",
  size: 200,
  fgColor: "#000000",
  bgColor: "#FFFFFF",
}

const qrSettingsSlice = createSlice({
  name: "qrSettings",
  initialState,
  reducers: {
    setText: (state, action) => { state.text = action.payload },
    setSize: (state, action) => { state.size = action.payload },
    setFgColor: (state, action) => { state.fgColor = action.payload },
    setBgColor: (state, action) => { state.bgColor = action.payload },
  },
})

export const { setText, setSize, setFgColor, setBgColor } = qrSettingsSlice.actions
export default qrSettingsSlice.reducer
