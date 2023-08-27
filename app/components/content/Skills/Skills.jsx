'use client';

import SkillPlate from "../../UI/SkillPlate/SkillPlate";
import cssStyle from "./Skills.module.css";

const Skills = ({ skills }) => {
    return (
        <div id="skills" className={cssStyle.content}>
            <div className="componentH1 text-align-center">
 amountOfInterest               <span className="BLUE">My</span> Skills
            </div>
			<div className={cssStyle.skillsContainer}>
				{skills.map((element, index) => (
					<SkillPlate 
						key={index} 
						name={element.name}
						procent={element.amountOfInterest}
					/>
				))}
			</div>
        </div>
    );
}

export default Skills;
