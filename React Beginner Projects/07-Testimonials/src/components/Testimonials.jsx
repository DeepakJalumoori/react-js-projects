import React, { useState } from 'react';
import "../style.css";

const Testimonials = () => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const testimonials = [{
      quote:"React beginner projects are very helpful to understand concepts of React",
      author:"Deepak"
    },
    {
      quote:"This repo contains all the learning of react through projects",
      author:"Sameer"
    },
    {
      quote:"Having strong fundamental of coding can really help us to learn new technologies",
      author:"Karthikeya"
    },
    {
      quote:"React is highly demanding skill in the current market!",
      author:"Akhil"
    },
    {
      quote:"Javascript is must prerequisite for learning react!",
      author:"Shashank"
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (prev) => ((prev + testimonials.length-1) % testimonials.length)
    )
  };

   const handleNextClick = () => {
    setCurrentIndex(
      (prev) => ((prev + 1) % testimonials.length)
    )
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimonials-author">
        -{testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Testimonials;