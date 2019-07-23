import React from "react";
import NaturePhoto from '../assets/img/NatureScreenShot.jpg';
import TrelloPhoto from '../assets/img/Trello.jpg';
import InProgress from '../assets/img/InProgress.jpg';
import Github from '../Icons/Github';
import Live from '../Icons/Globe';


export default function Projects() {
  
  return (
    <div className="project-section">
        <h3 className="header-3">
          Projects
        </h3>

        <div className="project-section_container">
          <div className="project-section_container-project">
          <div className="project-section_container-project-top">
              <img src={NaturePhoto} alt="" className="project-section_container-project-img"/>
              <h4 className="header-4">
                Nature Demo 
              </h4>
              </div>
              
              <p className="project-section_container-project-description">
                  Demo Project -- Used Sass with 7-1 architecture and BEM;
                 
              </p>
              <div className="project-section_container-project-buttonContainer">
             
             
              <Live height='30' width='25' fill='#000'className="project-section_container-project-button"/>
              
              <a href="https://github.com/trew13690/NaturePortfolioSample" target="_blank">
               <Github fill='#000' width='25' height='25' className="project-section_container-project-button" />
               </a>
                </div>
          </div>
          <div className="project-section_container-project">
           <div className="project-section_container-project-top">
            <img src={TrelloPhoto} alt="" className="project-section_container-project-img"/>
              <h4 className="header-4">
                Trello  Demo
              </h4>
              </div>
              <p className="project-section_container-project-description">
                Demo Project -- Used Flexbox and Sass with 7-1 Arch and BEM;
              
              </p>
              <div className="project-section_container-project-buttonContainer">
              <Live className="project-section_container-project-button"/>
              <a href="https://github.com/trew13690/Trello" target="_blank">
                <Github className="project-section_container-project-button"/>
                </a>
                </div>
          </div>
          <div className="project-section_container-project">
           <div className="project-section_container-project-top">
            <img src={InProgress} alt="" className="project-section_container-project-img" style={{maxHeight: '900px'}}/>
              <h4 className="header-4">
                Ark Tribe Manager
              </h4>
              </div>
              <p className="project-section_container-project-description">
                IN PROGRESS -- Ark Tribe Manager is a tool for the gaming community that plays the game Ark; 
              </p>
              <div className="project-section_container-project-buttonContainer">
              <Live className="project-section_container-project-button"/>

                <Github className="project-section_container-project-button"/>
                </div>
          </div>
        </div>
    </div>
  );
}
