import React, { useState } from 'react';
import "../style.css";

const ColorToggler = () => {
  const [backgroundColor,setBackgroundColor] = useState("white");
  const [textColor,setTextColor] = useState("#1b1b1b")
  const [buttonColor,setButtonColor] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "white" : "#1b1b1b");
    setButtonColor(buttonColor === "white" ? "#1b1b1b" : "white");
  }
  return (
    <section style={{backgroundColor,color:textColor}}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor:buttonColor,
          color :textColor,
          border : `2px solid ${textColor}`
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Change to White Theme" : "Change to Black Theme"}
      </button>

      <section className='content'>
        <h1>I am <br /> Deepak...</h1>
      </section>
    </section>
  )
}

export default ColorToggler;