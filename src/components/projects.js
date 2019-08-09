import React from "react";
import NaturePhoto from "../assets/img/NatureScreenShot.jpg";

import TrelloPhoto from "../assets/img/Trello.jpg";
import InProgress from "../assets/img/In-progress.jpg";
import Github from "../Icons/Github";
import Live from "../Icons/Globe";

const project = (
  img,
  projectTitle,
  projectDescription,
  projectLink,
  codeLink
) => {
  return (
    <React.Fragment>
      <div className="project-section-project">
        <div className="project-section-project-top">
          <img src={img} className="project-section-project-img" />
          <h4 className="header-4" >{projectTitle}</h4>
          <p className="project-section-project-description">
            {projectDescription}
          </p>
        </div>

        <div className="project-section-project-buttonContainer">
          <a href={projectLink} target="_blank">
            <Live
              height="30"
              width="25"
              fill="#000"
              className="project-section-project-button"
            />
          </a>

          <a href={codeLink} target="_blank">
            <Github
              fill="#000"
              width="25"
              height="25"
              className="project-section-project-button"
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default function Projects() {
  return (
    <div className="project-section">
      <h3 className="header-4 project-section-header">Projects</h3>
      <div className="project-section-container">
     
        {project(
          NaturePhoto,
          "Nature",
          "Demo using Sass",
          "",
          "https://github.com/trew13690/NaturePortfolioSample"
        )}

        {project(
          TrelloPhoto,
          "Trello",
          "Demo using Flexbox",
          "",
          "https://github.com/trew13690/Trello"
        )}
        {project(
          InProgress,
          "ArkMin",
          "In Progress - Ark Tribe Manager for the game Ark Survival",
          "",
          ""
        )}
      </div>
      </div>
  );
}
