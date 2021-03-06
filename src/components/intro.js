import React from "react";
import ProfilePic from "../assets/img/Profile.jpg";
import EmailIcon from "../Icons/Envelope";
import GitLabIcon from '../Icons/Gitlab';
import LinkedInIcon from '../Icons/LinkedinSquare';
import GithubIcon from "../Icons/Github";
import Resume from '../assets/AlexandreTrewResumeOffical.pdf';
export default function Intro() {
  return (
    <div className="intro">
      <div className="intro_info">
        <div className="intro_info-header-container">
          <img src={ProfilePic} alt="" className="intro_info-profile-pic" />
      
        </div>
      </div>
      <div className="intro_info-name">
            <h1 className="header1">Alexandre Trew |  Full Stack Developer</h1>
          <h2 className="header2">Seattle WA</h2>
          <a href={Resume} download><button class="skills-button intro-button ">Resume</button></a>
      </div>
      <div className="intro_bio">
        <div className="intro_bio-main">
          <p className="intro_bio-text">
        Hi! You want to know who I am; I am the kind of person who never gives up. No matter what the problems are ,  no matter the issue, I always and will continue to solve the problem. If I don't know how to solve the problem, I learn what is missing. My biggest skill isn't just programming or solving problems. My biggest skill is my resolve. Nothing stop me from reaching my goals; </p> 
        <p className="intro_bio-text">I am thirsty for knowledge and I spend all my free time learning more about technology, let it be project management to compiler design. I will push myself to be more productive, efficient, and creative in my thoughts and actions everyday. 
        This is who I am. 
          </p>
        </div>

        <div className="intro_bio-contact-nav">
          <li className="intro_contact-nav-list">
            <a href="https://gitlab.com/redtrew" target="_blank">
              <GitLabIcon
                width="30"
                height="30"
                className="intro_bio-contact-nav-icon"
              />
            </a>
          </li>
          <li className="intro_contact-nav-list">
            <a href="https://www.linkedin.com/in/alextrew/" target="_blank">
              <LinkedInIcon
              widht="30"
              height="30"
              className="intro_bio-contact-nav-icon"/>
            </a>
          </li>
          <li className="intro_contact-nav-list">
            <a href="https://github.com/trew13690" target="_blank">
              <GithubIcon className="intro_bio-contact-nav-icon" />
            </a>
          </li>
          <li className="intro_contact-nav-list">
            <a href="mailto: trew13690@gmail.com" target="_blank">
              <EmailIcon
                width="40"
                height="40"
                className="intro_bio-contact-nav-icon"
              />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
