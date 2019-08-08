import React from "react";

import IconHtml from "../Icons/Html5";
import IconJava from "../Icons/Java";
import IconPython from "../Icons/Python";
import IconSass from "../Icons/Sass";
import IconJavascript from "../Icons/Javascript";
import IconStar from "../Icons/Star";
import IconReact from "../Icons/React";
import IconDocker from "../Icons/Docker";
import IconDjango from "../Icons/Django";
import IconGit from "../Icons/Git";
import IconPostGres from "../Icons/Postgresql";

import { BarChart } from "react-chartkick";
import "chart.js";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-top">
        <h2 className="header2 skills-header">Skills</h2>
        <div className="skills-filter">
          <button className="skills-button">Languages</button>
          <button className="skills-button">Framework</button>
          <button className="skills-button">DB</button>
          <button className="skills-button">Tools and Management</button>
        </div>
      </div>

      <div className="skills-skill-box">
        <div className="skills-skill-box-paper">
          <h3 className="skills-header">Languages</h3>
          <div className="skills-skill-box_skill-icon">
            <IconHtml />
            <IconSass />
            <IconJavascript />
            <IconJava />
            <IconPython />
          </div>
          <div className="skills-skill-box_level">
            <BarChart
            responsive={true}
              colors={["#921111"]}
              height="635px"
              discrete={true}
              style={{paddingBottom: '2rem'}}
              data={[
                ["Html", 3],
                ["SCSS", 2],
                ["Javascript", 3],
                ["Java", 4],
                ["Python", 4]
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
