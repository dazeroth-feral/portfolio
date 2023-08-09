'use client';

import cssStyle from "./Footer.module.css";

import React, { useState } from 'react';

const noHoverToTopButtom = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38" height="38" rx="9" fill="#1F232E" stroke="#18A4E3" strokeWidth="2" />
        <path d="M18.6665 15.2187V28.0001H21.3331V15.2187L27.0571 20.9427L28.9425 19.0574L19.9998 10.1147L11.0571 19.0574L12.9425 20.9427L18.6665 15.2187Z" fill="#18A4E3" />
    </svg>
);

const hoverToTopButtom = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38" height="38" rx="9" fill="#18A4E3" stroke="#18A4E3" strokeWidth="2" />
        <path d="M18.6667 15.2186V28H21.3334V15.2186L27.0574 20.9426L28.9427 19.0573L20 10.1146L11.0574 19.0573L12.9427 20.9426L18.6667 15.2186Z" fill="#1F232E" />
    </svg>
);

export default function Footer() {
    const [toTopButtonHover, setToTopButtonHover] = useState(false);

    return (
        <footer className={cssStyle.content}>
            <div className={cssStyle.licenseSavedText}>
                © Шопляк Сергій, 2023. Усі права захищено.
            </div>
            <div className={cssStyle.toTopButton}
                onMouseOver={() => setToTopButtonHover(true)}
                onMouseOut={() => setToTopButtonHover(false)}
            >
                {toTopButtonHover
                    ? hoverToTopButtom
                    : noHoverToTopButtom
                }
            </div>
        </footer>
    )
};