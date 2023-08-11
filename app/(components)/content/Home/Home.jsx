
import cssStyle from "./Home.module.css";

import TextBlock from "./TextBlock/TextBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

export default function Home({ dataPack }) {
    return (
        <div className={cssStyle.content}>
            <TextBlock personalInformation={dataPack.personalInformation} />
            <ButtonBlock socialNetworkLinks={dataPack.socialNetworkLinks} />
        </div>
    );
};