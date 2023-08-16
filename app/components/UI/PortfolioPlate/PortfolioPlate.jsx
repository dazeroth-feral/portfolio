'use client';

import { useState } from "react";
import cssStyle from "./PortfolioPlate.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

const PortfolioPlate = ({ element }) => {
    const [modalActive, setModalActive] = useState(false);
    const [elementHovered, setElementHovered] = useState(false);

    const modalOpen = () => {
        setModalActive(true);
    };

    const modalClose = () => {
        setModalActive(false);
    };

    return (
        <div
            className={cssStyle.content}
            onMouseOver={() => setElementHovered(true)}
            onMouseLeave={() => setElementHovered(false)}
        >
            <img
                className={cssStyle.image}
                onClick={modalOpen}
                src={element.imgPath} alt="image"
            />
            <div className="componentH4 align-self-center">{element.name}</div>

            <img
                className={
                    elementHovered
                        ? [cssStyle.hoverImage, cssStyle.hovered].join(" ")
                        : cssStyle.hoverImage
                }
                onClick={modalOpen}
                onMouseOver={() => setElementHovered(true)}
                onMouseLeave={() => setElementHovered(false)}
                src="/img/portfolioImageHovered.svg" alt="hover"
            />

            <ModalWindow
                doClose={modalClose} isActive={modalActive}
                navLink={element.navLink}
            >
                <div className={cssStyle.modalStyle}>
                    <div className={cssStyle.topBlock}>
                        <div className="componentH3">{element.name}</div>
                        <div className="componentP DARKPURPLE">{element.navLink}</div>
                    </div>
                    <div className="componentP">{element.description}</div>
                </div>
            </ModalWindow>
        </div>

    );
}

export default PortfolioPlate;