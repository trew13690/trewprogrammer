import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from '../assets/img/logo.png';
import ProfilePic from '../assets/img/Profile.jpg';
import TwitterIcon from '../Icons/Twitter';
import EmailIcon from '../Icons/Envelope';
import GithubIcon from '../Icons/Github';
export default function Intro() {
  return (
    <div className="intro">
    <div className="intro_video">
    <video className="intro_video-content" autoPlay='true' muted loop>
        <source src="./src/assets/video/working.mp4" type="video/mp4"/>
    </video>
    </div>
      <div className="intro_info">
      <div className="intro_info-logo">
          <img src={logo} alt=""/>
      </div>
      <div className="intro_info-header-container">
        <h1 className="intro_info-header" >
          Full Stack Developer
        </h1>
        <h3 className="intro_info-header-2" >
            Building Solutions!
        </h3>
        </div>
      </div>
       
      <div className="intro_bio">
      <h3 className='intro-name-header'>Alex Trew</h3>
      <div className="intro_bio-main">
        <p className="intro_bio-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nulla
          vero odio, aut cupiditate adipisci odit? Repellendus enim totam
          doloremque velit, molestiae vitae, nam molestias assumenda similique
          harum ipsa magni.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam obcaecati,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quisquam ad eaque maiores voluptatibus voluptate a excepturi optio. Quibusdam temporibus neque similique cum totam expedita modi, sed adipisci doloremque.
         </p>
     
           <img src={ProfilePic} alt="" className="intro_bio-profile-pic" />
        </div>
      
      <div className="intro_bio-contact-nav">
        <li className="intro_contact-nav-list">
        <a href='https://twitter.com/trewred' target='_blank'>
       <TwitterIcon width='30' height='30' className="intro_bio-contact-nav-icon" />
       </a>
       </li>
       <li className="intro_contact-nav-list">
       <a href='https://github.com/trew13690' target='_blank'>
       <GithubIcon className="intro_bio-contact-nav-icon"/></a>
       </li>
       <li className="intro_contact-nav-list">
       <a href="mailto: trew13690@gmail.com" target='_blank'>
       <EmailIcon width='40' height='40' className="intro_bio-contact-nav-icon"/>
       </a>
        </li>
      </div>
      </div>
    </div>
  );
}
