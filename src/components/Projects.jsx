import React from "react";

const projects = [
  {
    title: "Pet That Cat",
    description: "A silly spin on the classic “cookie clicker game,” Pet That Cat uses JavaScript, HTML, and CSS to encourage the user to click different parts of the cat for points before the timer runs out.",
    image: "/images/proj1.png", 
    links: [{text: "View Project", url: "https://github.com/bristolk4/project-1"}]
  },
  {
    title: "CRUSTY",
    description: "CRUSTY is an Express/EJS CRUD app that allows the user to create, update, delete, and view a list of their favorite breads.",
    image: "/images/proj2.png", 
    links: [{text: "View Project", url: "https://github.com/bristolk4/project-2-bread"}]
  },
  {
    title: "Level Up",
    description: "Level Up was a collaborative project. This is CRUD app using Express/EJS, MongoDB/Mongoose, and React. It allows the user to create, view, update, and delete a list of video games and players.",
    image: "/images/proj3.png", 
    links: [{text: "View Project", url: "https://github.com/taihlorelliott/group-project-3"}]
  },
  {
    title: "DoughtaBase",
    description: "Another collaborative project, DoughtaBase is a CRUD app using Python, Django, Postgress, React, Authentication, and a third party Web API. It allows users to sign up and log in to an account where they can add their bakery to a map, and search the map for other bakeries in their area.",
    image: "/images/proj4.png", 
    links: [
      {text: "View Backend", url: "https://github.com/jonas060831/doughtabase"},
      {text: "View Frontend", url: "https://github.com/jonas060831/doughtabase_frontend"},
    ]
  },
  {
    title: "Legend of Zelda Trivia",
    description: "A straightforward and fun flashcard game, Legend of Zelda Trivia uses TypeScript with React to allow the user to flip through a series of flashcards displaying questions about the video game series, The Legend of Zelda.",
    image: "/images/proj5-1.png", 
    links: [{text: "View Project", url: "https://github.com/bristolk4/finalproject"}],
  },
  {
    title: "The Typing Game",
    description: "The Typing Game uses C#/.NET to encourage the user to press different keys in order to get the highest score to win the game.",
    image: "/images/proj5-2.png", 
    links: [{text: "View Project", url: "https://github.com/bristolk4/finalprojectpart2"}],
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <hr/>
      <h1>My Projects</h1>
      <hr/>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.links.map((link, i) => (
                <a key={i} href={link.url} className="project-link" target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
