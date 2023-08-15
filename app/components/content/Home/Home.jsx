import cssStyle from "./Home.module.css";

import TextBlock from "./TextBlock/TextBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import BackgroundBlock from "./BackgroundBlock/BackgroundBlock";

export default function Home({ dataPack }) {
    return (
        <div className={cssStyle.content}>
            <div className={cssStyle.leftPositionBlock}>
                <TextBlock personalInformation={dataPack.personalInformation} />
                <ButtonBlock socialNetworkLinks={dataPack.socialNetworkLinks} />
            </div>
            <BackgroundBlock />
        </div>
    );
};