'use client';

import Link from "next/link";
import cssStyle from "./SocialNetworkLinks.module.css";

import React, { useState } from 'react';

export default function SocialNetworkLinks({ socialNetworkLinks }) {
    const [gitHubButtonHover, setGitHubButtonHover] = useState(false);
    const [telegramButtonHover, setTelegramButtonHover] = useState(false);
    const [tikTioButtonHover, setTikTioButtonHover] = useState(false);

    let gitHubLink, telegramLink, tikTokLink;

    for (var i = 0; i < socialNetworkLinks.length; i++) {
        socialNetworkLinks[i].textId === "gitHub" ? gitHubLink = socialNetworkLinks[i].link : gitHubLink;
        socialNetworkLinks[i].textId === "telegram" ? telegramLink = socialNetworkLinks[i].link : telegramLink;
        socialNetworkLinks[i].textId === "tikTok" ? tikTokLink = socialNetworkLinks[i].link : tikTokLink;
    }

    return (
        <div className={cssStyle.socialNetwork}>
            <Link href={gitHubLink} target="_blank">
                <svg
                    onMouseOver={() => setGitHubButtonHover(true)}
                    onMouseOut={() => setGitHubButtonHover(false)}
                    className={cssStyle.gitHubLinkSvgContainer}
                    width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <circle className={
                        gitHubButtonHover
                            ? [cssStyle.gitHubLinkSvgCircle, cssStyle.hovered].join(" ")
                            : cssStyle.gitHubLinkSvgCircle
                    } cx="24" cy="24" r="23" strokeWidth="2" />
                    <g
                        className={
                            gitHubButtonHover
                                ? [cssStyle.gitHubLinkSvgIco, cssStyle.hovered].join(" ")
                                : cssStyle.gitHubLinkSvgIco
                        }
                        clipPath="url(#clip0_93_631)">
                        <path className={
                            gitHubButtonHover
                                ? [cssStyle.gitHubLinkSvgBorder, cssStyle.hovered].join(" ")
                                : cssStyle.gitHubLinkSvgBorder
                        } d="M21 32C16 33.5 16 29.5 14 29M28 35V31.13C28.0375 30.6532 27.9731 30.1738 27.811 29.7238C27.6489 29.2738 27.3929 28.8634 27.06 28.52C30.2 28.17 33.5 26.98 33.5 21.52C33.4997 20.1238 32.9627 18.7812 32 17.77C32.4559 16.5485 32.4236 15.1983 31.91 14C31.91 14 30.73 13.65 28 15.48C25.708 14.8588 23.292 14.8588 21 15.48C18.27 13.65 17.09 14 17.09 14C16.5764 15.1983 16.5441 16.5485 17 17.77C16.0301 18.7887 15.4925 20.1435 15.5 21.55C15.5 26.97 18.8 28.16 21.94 28.55C21.611 28.89 21.3573 29.2954 21.1953 29.7399C21.0334 30.1844 20.9668 30.6581 21 31.13V35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_93_631">
                            <rect width="24" height="24" transform="translate(12 13)" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>

            <Link href={telegramLink} target="_blank">
                <svg
                    onMouseOver={() => setTelegramButtonHover(true)}
                    onMouseOut={() => setTelegramButtonHover(false)}
                    className={cssStyle.telegramLinkSvgContainer}
                    width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <circle
                        className={
                            telegramButtonHover
                                ? [cssStyle.telegramLinkSvgCircle, cssStyle.hovered].join(" ")
                                : cssStyle.telegramLinkSvgCircle
                        }
                        cx="24" cy="24" r="23" strokeWidth="2" />
                    <g clipPath="url(#clip0_93_632)">
                        <g
                            className={
                                telegramButtonHover
                                    ? [cssStyle.telegramLinkSvgIco, cssStyle.hovered].join(" ")
                                    : cssStyle.telegramLinkSvgIco
                            }
                            mask="url(#mask0_93_632)">
                            <path d="M32.0517 15.1293L10.7888 23.3711C9.93313 23.7549 9.64372 24.5236 10.5819 24.9407L16.0368 26.6832L29.2259 18.4899C29.946 17.9755 30.6833 18.1127 30.0489 18.6785L18.7212 28.9879L18.3654 33.3509C18.695 34.0246 19.2985 34.0277 19.6834 33.6929L22.8174 30.7121L28.1848 34.7521C29.4314 35.494 30.1097 35.0152 30.3779 33.6555L33.8985 16.8992C34.264 15.2254 33.6407 14.488 32.0517 15.1293Z" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_93_632">
                            <rect width="24" height="24" fill="white" transform="translate(10 13)" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>

            <Link href={tikTokLink} target="_blank">
                <svg
                    className={cssStyle.tikTokLinkSvgContainer}
                    onMouseOver={() => setTikTioButtonHover(true)}
                    onMouseOut={() => setTikTioButtonHover(false)}
                    width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <circle
                        className={
                            tikTioButtonHover
                                ? [cssStyle.tikTokLinkSvgCircle, cssStyle.hovered].join(" ")
                                : cssStyle.tikTokLinkSvgCircle
                        }
                        cx="24" cy="24" r="23" strokeWidth="2" />
                    <g clipPath="url(#clip0_93_633)">
                        <path
                            className={
                                tikTioButtonHover
                                    ? [cssStyle.tikTokLinkSvgIco, cssStyle.hovered].join(" ")
                                    : cssStyle.tikTokLinkSvgIco
                            }
                            fillRule="evenodd" clipRule="evenodd" d="M24 13C23.4477 13 23 13.4477 23 14V28C23 29.1046 22.1046 30 21 30C19.8954 30 19 29.1046 19 28C19 26.8954 19.8954 26 21 26C21.5523 26 22 25.5523 22 25V22C22 21.4477 21.5523 21 21 21C17.134 21 14 24.134 14 28C14 31.866 17.134 35 21 35C24.866 35 28 31.866 28 28V22.6619C29.471 23.5127 31.1792 24 33 24C33.5523 24 34 23.5523 34 23V20C34 19.4477 33.5523 19 33 19C30.2386 19 28 16.7614 28 14C28 13.4477 27.5523 13 27 13H24Z" />
                    </g>
                </svg>
            </Link>
        </div>
    );
};