import css from "styled-jsx/css";
import cssStyle from "./SkillPlate.module.css";

const SkillPlate = ({ name, procent }) => {
	if (procent == 0) return null;

	return (
        <div className={cssStyle.content}>
			<div className={cssStyle.topBlock}>
				<div className={cssStyle.name}>{name}</div>
				<div className={cssStyle.amountOfInterest}>{procent}%</div>
			</div>
			<div className={cssStyle.bottomBlock}>
               <div className={cssStyle.procentContainer}>
					<div className={cssStyle.procentBar} style={{width: `${procent}%`}} />			
			   </div>
			</div>
        </div>
    );
}

export default SkillPlate;
