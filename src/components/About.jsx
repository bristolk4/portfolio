import React from "react";

const About = () => {
  return (
    <>
    <div className="about-container content">

      <div className="about-text">
        <h1>About Me</h1>
        <hr/>
        
        <p>
        I've always been curious about how things work under the hood. As a child, I had a book filled with ideas for building mechanical toys, and my favorite project was a small car made from a paper plate and a tiny motor. In school, I couldn't resist taking pens apart just to see how their parts fit together—then putting them back, hopefully without getting ink everywhere.
        </p>
        <p>
        In recent years, baking has become my favorite hobby. I love how a slight change in a measurement can completely transform the final result. (On this page, you see one of my croissants!)
        </p>
        <p>
        I've always enjoyed puzzles and problem-solving, so when I started learning about software engineering, it immediately felt like the right fit. The challenge of piecing together logic and structure reminds me of everything I love about tinkering and baking—precision, creativity, and discovery.
        </p>
        <p>
        I'm excited to collaborate and get to know each other!
        </p>
      </div>

      <div className="about-image">
        <img src="/images/croissant.JPG" alt="about" />
      </div>
    </div>
    </>
  );
};

export default About;
