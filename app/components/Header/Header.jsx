'use client';

import { Link } from "react-scroll";
import { scrollSiteTo } from "@/app/imports/functions";
import cssStyle from "./Header.module.css";

// onClick={() => scrollSiteTo(0)}

export default function Header() {
    return (
        <header className={cssStyle.content}>
            <Link 
                className={cssStyle.siteName} 
				to="home"
				duration={500}
				spy={true}
				smooth={true}
				offset={-80}
            >
                Dazeroth
            </Link>
            <div className={cssStyle.navMenu}>
				<Link 
					className={cssStyle.navMenuItem} 
					to="home"
					duration={500} 
					spy={true} 
					smooth={true} 
					offset={-80} 
				>
					Home
				</Link>
				<Link 
					className={cssStyle.navMenuItem} 
					to="about" 
					duration={500} 
					spy={true} 
					smooth={true} 
					offset={-80} 
				>
					About
				</Link>
				<Link 
					className={cssStyle.navMenuItem} 
					to="skills" 
					duration={500} 
					spy={true} 
					smooth={true} 
					offset={-120} 
				>
					Skills
				</Link>
				<Link 
					className={cssStyle.navMenuItem} 
					to="portfolio" 
					duration={500} 
					spy={true} 
					smooth={true} 
					offset={-120} 
				>
					Portfolio
				</Link>
				<Link 
					className={cssStyle.navMenuItem} 
					to="contact" 
					duration={500} 
					spy={true} 
					smooth={true} 
					offset={-80} 
				>
					Contact
				</Link>
            </div>
        </header>
    )
};
