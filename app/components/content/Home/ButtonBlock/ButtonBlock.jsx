'use client';

import cssStyle from "./ButtonBlock.module.css";

import Button from "@/app/components/UI/Button/Button";
import SocialNetworkLinks from "./SocialNetworkLinks/SocialNetworkLinks";
import { Link } from "react-scroll";

export default function Home({ socialNetworkLinks }) {
    return (
        <div className={cssStyle.content}>
			<Link
				to="contact" 
				duration={1300}
				spy={true}
				smooth={true}
				offset={-80}
			>		
				<Button>
					Let`s Talk
				</Button>
			</Link>	
			<SocialNetworkLinks socialNetworkLinks={socialNetworkLinks} />
        </div>
    );
};
