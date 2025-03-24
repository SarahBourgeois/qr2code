import React from "react";

function TextInput({ label, placeholder })  {

  return (
    <label className="block">
    <span className="block mb-1 text-sm">{label}</span>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </label>
  )

}

export default TextInput;