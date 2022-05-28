import React from 'react'
import { useStateContext } from "../context/ContextProvider";

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  const { setThemeSettings } = useStateContext();
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={() => setThemeSettings(false)}
    >
      {text}
    </button>
  );
}

export default Button;
