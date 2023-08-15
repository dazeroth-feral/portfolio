'use client';

import Button from "../Button/Button";
import cssStyle from "./ModalWindow.module.css";

const ModalWindow = ({ children, isActive, doClose }) => {
    if(!isActive) return null;

    return (
        <div 
            className={[cssStyle.content, cssStyle.active].join(" ")}
            onClick={doClose}
        >
            <div 
                className={cssStyle.modalContent}
                onClick={event => event.stopPropagation()}
            >
                <div className={cssStyle.mainContent}>
                    {children}    
                </div>
                <div className={cssStyle.doCloseModal}>
                    <Button
                        callbackOnClick={doClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default ModalWindow;