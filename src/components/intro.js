import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from '../assets/img/logo.png';
import ProfilePic from '../assets/img/Profile.jpg';
export default function Intro() {
  return (
    <div className="intro">
    <div className="intro_video">
    <video className="intro_video-content" autoplay='true' muted loop>
        <source src="./src/assets/video/working-it.mp4" type="video/mp4"/>
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
        <img src={ProfilePic} alt="" className="intro_bio-profile-pic" />
        <p className="intro_bio-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nulla
          vero odio, aut cupiditate adipisci odit? Repellendus enim totam
          doloremque velit, molestiae vitae, nam molestias assumenda similique
          harum ipsa magni.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam obcaecati, aliquid harum inventore adipisci! Veniam eaque exercitationem dicta et voluptatem molestiae delectus rem distinctio cumque neque non, iusto fugiat?
        </p>
      </div>
    </div>
  );
}
