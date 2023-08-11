import cssStyle from "./ButtonBlock.module.css";

import SocialNetworkLinks from "./SocialNetworkLinks/SocialNetworkLinks";

export default function Home({ socialNetworkLinks }) {
    return (
        <div className={cssStyle.content}>
            <div className={cssStyle.letsTalk}>
                Let`s Talk
            </div>
            <SocialNetworkLinks socialNetworkLinks={socialNetworkLinks} />
        </div>
    );
};