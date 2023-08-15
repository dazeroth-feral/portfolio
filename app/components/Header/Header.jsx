'use client';

import { scrollSiteTo } from "@/app/imports/functions";
import cssStyle from "./Header.module.css";

export default function Header() {
    return (
        <header className={cssStyle.content}>
            <a 
                className={cssStyle.siteName} 
                onClick={() => scrollSiteTo(0)}
            >
                Dazeroth
            </a>
            <div className={cssStyle.navMenu}>
                <a onClick={() => scrollSiteTo(0)}>Home</a>
                <a>About</a>
                <a>Skills</a>
                <a>Portfolio</a>
                <a>Contacts</a>
            </div>
        </header>
    )
};