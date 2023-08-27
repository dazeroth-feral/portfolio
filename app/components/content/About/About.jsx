import cssStyle from "./About.module.css";

import BackgroundBlock from "./BackgroundBlock/BackgroundBlock";
import TextBlock from "./TextBlock/TextBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

const About = ({ dataPack }) => {
    return (
        <div id="about" className={cssStyle.content}>
            <BackgroundBlock />
            <div className={cssStyle.rigthPositionBlock}>
                <TextBlock middleDescription={dataPack.personalInformation.middleDescription} />
                <ButtonBlock largeDescription={dataPack.personalInformation.largeDescription} />
            </div>
        </div>
    );
}

export default About;
