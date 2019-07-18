import React from "react";
import Card from "@material-ui/core/Card";
import IconHtml from "../Icons/Html5";
import IconJava from "../Icons/Java";
import IconPython from "../Icons/Python";
import IconSass from "../Icons/Sass";
import IconJavascript from "../Icons/Javascript";
import IconStar from '../Icons/Star';
export default function Skills() {
  return (
    <div className="skills">
      <h4 className="skills_heading">Skills</h4>

      <div className="skills_sub-container">

        <div className="skills-skill-box">
      
            <div className="skills-skill-box--list-skill">
                <div className="skills-skill-box-type">
              <IconHtml  className="skills-skill-box-icon"/>
              <p className="skills-skill-box--text">Html</p>
            </div>

            <div className="skills-skill-box-level">
                <div className="skills-skill-box-star">
                <IconStar />
                <IconStar />
                <IconStar />
                </div>
            </div>
            </div>

            <div className="skills-skill-box--list-skill">
               <div className="skills-skill-box-type">
              <IconSass className="skills-skill-box-icon"/>
              <p className="skills-skill-box--text">Sass</p>
            </div>

             <div className="skills-skill-box-level">
                <div className="skills-skill-box-star">
                <IconStar />
                <IconStar />
                </div>
            </div>
            </div>

        
             
            <div className="skills-skill-box--list-skill">
              <div className="skills-skill-box-type">
              <IconJavascript className="skills-skill-box-icon"/>
              <p className="skills-skill-box--text">Javascript</p>
            </div>

             <div className="skills-skill-box-level">
                <div className="skills-skill-box-star">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                </div>
            </div>
            </div>



          
            <div className="skills-skill-box--list-skill">
              <div className="skills-skill-box-type">
              <IconJava className="skills-skill-box-icon"/>
              <p className="skills-skill-box--text">Java</p>
            </div>

             <div className="skills-skill-box-level">
                <div className="skills-skill-box-star">
                <IconStar />
                <IconStar />
                <IconStar />
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
