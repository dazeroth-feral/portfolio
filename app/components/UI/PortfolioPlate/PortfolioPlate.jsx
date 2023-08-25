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

            <div
                className={
                    `${
                        elementHovered
                        ? [cssStyle.hoverImage, cssStyle.hovered].join(" ")
                        : cssStyle.hoverImage
                    } componentH1 flex column gap-10  `
                }
                onClick={modalOpen}
                onMouseOver={() => setElementHovered(true)}
                onMouseLeave={() => setElementHovered(false)}
            >
                    <div>
                        Click <div className="BLUE">Me</div>    
                    </div>
                    <div>
                        For <div className="BLUE">More</div> Information
                    </div>
            </div>

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