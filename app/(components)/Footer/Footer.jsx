'use client';

import cssStyle from "./Footer.module.css";

import Link from "next/link";
import React, { useState } from 'react';

export default function Footer() {
    const [toTopButtonHover, setToTopButtonHover] = useState(false);

    return (
        <footer className={cssStyle.content}>
            <div className={cssStyle.licenseSavedText}>
                © Шопляк Сергій, 2023. Усі права захищено.
            </div>

            <Link href="#topSite">
                <svg
                    className={cssStyle.toTopButtonSvgContainer}
                    onMouseOver={() => setToTopButtonHover(true)}
                    onMouseOut={() => setToTopButtonHover(false)}
                    width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        className={
                            toTopButtonHover
                                ? [cssStyle.toTopButtonSvgRect, cssStyle.hovered].join(" ")
                                : cssStyle.toTopButtonSvgRect
                        }
                        x="1" y="1" width="38" height="38" rx="9" strokeWidth="2" />
                    <path
                        className={
                            toTopButtonHover
                                ? [cssStyle.toTopButtonSvgIco, cssStyle.hovered].join(" ")
                                : cssStyle.toTopButtonSvgIco
                        }
                        d="M18.6665 15.2187V28.0001H21.3331V15.2187L27.0571 20.9427L28.9425 19.0574L19.9998 10.1147L11.0571 19.0574L12.9425 20.9427L18.6665 15.2187Z" />
                </svg>
            </Link>
        </footer>
    )
};