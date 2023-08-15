import cssStyle from "./SkillPlate.module.css";

const SkillPlate = ({ arrayOfElements }) => {
    return (
        <div className={cssStyle.content}>
            {arrayOfElements.map((element, index) => (
                <div
                    className={cssStyle.container}
                    key={index}>
                    <div className={cssStyle.topBlock}>
                        <div className={cssStyle.name}>{element.name}</div>
                        <div>{element.amountOfInterest}%</div>
                    </div>
                    <div className={cssStyle.bottomBlock}>
                        <div className={cssStyle.procentContainer}>
                            <div className={cssStyle.procentBar} style={{width: `${element.amountOfInterest}%`}} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillPlate;