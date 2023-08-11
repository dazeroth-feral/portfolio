import cssStyle from "./ButtonBlock.module.css";

import SocialNetworkLinks from "./SocialNetworkLinks/SocialNetworkLinks";

export default function Home({ socialNetworkLinks }) {
    return (
        <div className={cssStyle.content}>
            <div className={cssStyle.letsTalk}>
                
            </div>
            <SocialNetworkLinks socialNetworkLinks={socialNetworkLinks} />
        </div>
    );
};