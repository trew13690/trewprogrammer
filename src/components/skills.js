import React, { useState, useEffect } from "react";

import IconHtml from "../Icons/Html5";
import IconJava from "../Icons/Java";
import IconPython from "../Icons/Python";
import IconSass from "../Icons/Sass";
import IconJavascript from "../Icons/Javascript";
import IconReact from "../Icons/React";
import IconDocker from "../Icons/Docker";
import IconDjango from "../Icons/Django";
import IconGit from "../Icons/Git";
import IconPostGres from "../Icons/Postgresql";
import IconAngular from '../Icons/Angular';
import IconSpring from '../Icons/Leaf';
import IconGraphQL from '../Icons/Graphql';
import IconMySQL from '../Icons/Mysql';
import IconScrum from '../Icons/LowPriority';
import IconKanban from '../Icons/TableChart';
import IconAWS from '../Icons/Amazonaws';
import IconMongoDB from '../Icons/Mongodb';
import IconNode from '../Icons/NodeDotJs';
import IconKerber from '../Icons/KubernetesIcon';
import IconGoogleCloud from '../Icons/GoogleCloud';

import { BarChart } from "react-chartkick";
import "chart.js";

const Icons = props => {
  if (props == "languages") {
    return (
      <React.Fragment>
       <div className="skills-skill-box_skill-icon">
        <IconHtml />
        <IconSass />
        <IconJavascript />
        <IconJava />
        <IconPython />
        </div>
      </React.Fragment>
    );
  }

  if (props == "framework") {
    return (
      <React.Fragment>
       <div className="skills-skill-box_skill-icon">
        <IconDjango />
        <IconReact />
        <IconSpring />
        <IconAngular />
        <IconNode />
        </div>
      </React.Fragment>
    );
  }

  if (props == "DB") {
    return (
      <React.Fragment>
       <div className="skills-skill-box_skill-icon skills-skill-box_db-icons">
        <IconPostGres />
        <IconGraphQL />
        <IconMySQL />
        <IconMongoDB />
        </div>
      </React.Fragment>
    );
  }

  if (props == "tools") {
    return (
      <React.Fragment>
       <div className="skills-skill-box_skill-icon skills-skill-box_tools-icons">
        <IconDocker />
        <IconKerber width='32' height='32' />
        <IconGit />
        <IconScrum width='32' height='32' />
        <IconKanban  width='32' heighty='32' />
        <IconGoogleCloud />
        <IconAWS />
        </div>
      </React.Fragment>
    );
  }
};

const graphData = props => {
  const languages = (
    <BarChart
      responsive={true}
      colors={["#921111"]}
      height="600px"
      width="1000px"
      discrete={true}
      style={{ paddingBottom: "2rem" }}
      data={[
        ["Html", 3],
        ["SCSS", 2],
        ["Javascript", 3],
        ["Java", 4],
        ["Python", 4]
      ]}
    />
  );

  const frameworks = (
    <BarChart
      responsive={true}
      colors={["#921111"]}
      height="600px"
      width="1000px"
      discrete={true}
      style={{ paddingBottom: "2rem" }}
      data={[
        ["Django", 3],
        ["React.js", 4],
        ["Spring", 3],
        ["Angular", 2],
        ["Node.js", 2]
        
        ]}
    />
  );


  const DB = (
    <BarChart
    responsive={true}
    colors={["#921111"]}
    height="600px"
    width="1000px"
    discrete={true}
    style={{ paddingBottom: "2rem" }}
    data={[
      ["PostGresql", 3],
      ["GraphQL", 1],
      ["MySql", 3],
      ["MongoDB", 1]
      
      
      ]}
  />
  )

  const Tools = (
    <BarChart
    responsive={true}
    colors={["#921111"]}
    height="600px"
    width="1000px"
    discrete={true}
    style={{ paddingBottom: "2rem" }}
    data={[
      ["Docker", 2],
      ["Kubernetes", 2],
      ["Git", 4,],
      ["Scrum", 2],
      ["Kanban",3],
      ["Google Cloud", 2],
      ["AWS", 2]
      
      
      ]}
  />
  )

  if (props == "languages") {
    return languages;
  } else if (props == "framework") {
    return frameworks;
  }
  else if (props == "DB")
  {
    return DB;
  }
  else if (props = "tools"){
    return Tools
  }
};

export default function Skills() {
  let [skill, setSkill] = useState({ currentGroup: "languages" });
  console.log(`Skill Group selected is ${skill.currentGroup}`);

  return (
    <div className="skills">
      <div className="skills-top">
        <h2 className="header2 skills-header">Skills</h2>
        <div className="skills-filter">
          <button
            className="skills-button"
            onClick={() => setSkill({ currentGroup: "languages" })}
          >
            Languages
          </button>
          <button
            className="skills-button"
            onClick={() => setSkill({ currentGroup: "framework" })}
          >
            Framework
          </button>
          <button
            className="skills-button"
            onClick={() => setSkill({ currentGroup: "DB" })}
          >
            DB
          </button>
          <button
            className="skills-button"
            onClick={() => setSkill({ currentGroup: "tools" })}
          >
            Tools and Management
          </button>

        </div>
      </div>

      <div className="skills-skill-box">
        <div className="skills-skill-box-paper">
          <div className="skills-skill-box_level">
            
              {Icons(skill.currentGroup)}
            
            {graphData(skill.currentGroup)}
          </div>
        </div>
      </div>
    </div>
  );
}
