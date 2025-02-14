import React from "react";

const About = () => {
  return (
    <>
    <div className="about-container content">

      <div className="about-text">
        <h1>About Me</h1>
        <hr/>
        <p>
        I have always had a curiosity about the way things work under the hood. When I was a child, I had a children's book with ideas for mechanical toys you could make yourself. My favorite was a little car made from a paper plate and a small motor. In school, I had a habit of taking pens apart in class to see the different parts, then putting them back together.

        For the past few years, my favorite hobby has been baking. I love how a small change in one measurement can drastically change the outcome of the baked good. (To the left is a picture of one of my croissants, and on my home page, some of my Koiugn-Amann!)

        I have always loved puzzles and piecing things together, so when I began learning about software engineering, I knew it was the right field for me.

        I can't wait to work together and get to know each other!        </p>
      </div>

      <div className="about-image">
        <img src="/images/headshot.png" alt="about" />
      </div>
    </div>
    </>
  );
};

export default About;
