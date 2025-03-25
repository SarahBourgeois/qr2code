import { configureStore } from "@reduxjs/toolkit"

import qrSettingsReducer from "./qrSettingsSlice"

export const store = configureStore({
  reducer: { qrSettings: qrSettingsReducer },
})
