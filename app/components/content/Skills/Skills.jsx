'use client';

import SkillPlate from "../../UI/SkillPlate/SkillPlate";
import cssStyle from "./Skills.module.css";

const blockName = [
    "Programming languages:",
    "Backend Technologies:",
    "Deployment & Hosting:",
    "Frontend Technologies:",
    "Frameworks:",
    "Actions with code:"
];

const Skills = ({ skills }) => {
    let arrayOfElements = [];
    let maxGroupValue = skills[1].group;

    for (var i = 0; i < skills.length; i++) {
        if (maxGroupValue < skills[i].group) {
            maxGroupValue = skills[i].group
        }
    }

    for (var i = 1; i < maxGroupValue + 1; i++) {
        var timedArray = [];
        for (var j = 0; j < skills.length; j++) {
            if (skills[j].group == i) {
                timedArray.push(skills[j]);
            }
        }
        arrayOfElements.push(timedArray);
    }

    return (
        <div className={cssStyle.content}>
            <div className={["componentH1", cssStyle.componentName].join(" ")}>
                <span className="BLUE">
                    My
                </span>
                Skills
            </div>
            <div className={cssStyle.skillsContainer}>
                {arrayOfElements.map((element, index) => (
                    <div key={index} className={cssStyle.blockContainer}>
                        <div className={cssStyle.blockName}>{blockName[index]}</div>
                        <SkillPlate key={index} arrayOfElements={element} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;