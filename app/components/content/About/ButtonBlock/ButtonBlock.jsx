'use client';

import cssStyle from "./ButtonBlock.module.css";

import React, { useState } from "react";

import Button from "@/app/components/UI/Button/Button";
import ModalWindow from "@/app/components/UI/ModalWindow/ModalWindow";

const ButtonBlock = ({ largeDescription }) => {
    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    return (
        <div className={cssStyle.content}>
            <Button callbackOnClick={openModal}>Read More</Button>
            <ModalWindow isActive={modalActive} doClose={closeModal} >
                {largeDescription}
            </ModalWindow>
        </div>
    );
}
 
export default ButtonBlock;