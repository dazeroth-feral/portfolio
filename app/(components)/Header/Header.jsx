'use client';

import cssStyle from "./Header.module.css";

import React, { useState } from 'react';
import Link from "next/link";

export default function Header() {
    return (
        <header className={cssStyle.content}>
            <Link className={cssStyle.siteName} href="#">
                Dazeroth
            </Link>
            <div className={cssStyle.navMenu}>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Skills</Link>
                <Link href="#">Portfolio</Link>
                <Link href="#">Contacts</Link>
            </div>
        </header>
    )
};