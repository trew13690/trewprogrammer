import React from 'react';
import Card from '@material-ui/core/Card'

export default function Skills(){
    return(
        <div className="skills">
        <h4 className="skills_heading">
            Skills
        </h4>
        <div className="skills_sub-container">
            <div className="skills-skill-box">
                <li className="skills-skill-box--list">
                    <p className="skills-skill-box--text">
                        Skill
                    </p>
                    <p className="skills-skill-box--text">
                        Skill
                    </p>
                    <p className="skills-skill-box--text">
                        Skill
                    </p>
                    <p className="skills-skill-box--text">
                        Skill
                    </p>
                </li>
            </div>

            <div className="skills-skill-box">
                <li className="skills-skill-box--list">
                <p className="skills-skill-box--text">
                    Skill
                </p>
                <p className="skills-skill-box--text">
                    Skill
                </p>
                <p className="skills-skill-box--text">
                    Skill
                </p>
                <p className="skills-skill-box--text">
                    Skill
                </p>
                </li>
            </div>
        </div>
        </div>
    )
}