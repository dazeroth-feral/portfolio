import cssStyle from "./ButtonBlock.module.css";

import Button from "@/app/components/UI/Button/Button";
import SocialNetworkLinks from "./SocialNetworkLinks/SocialNetworkLinks";

export default function Home({ socialNetworkLinks }) {
    return (
        <div className={cssStyle.content}>
            <Button>Let's Talk</Button>
            <SocialNetworkLinks socialNetworkLinks={socialNetworkLinks} />
        </div>
    );
};