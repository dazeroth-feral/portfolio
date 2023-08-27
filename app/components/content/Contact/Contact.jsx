'use client';

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import cssStyle from "./Contact.module.css";

const Contact = ({  }) => {
    const [inputValue, setInputValue] = useState("");

    return(
        <div id="contact" className={cssStyle.content}>
            <img src="/img/contactBackground.svg" alt="background" />
            <div className={cssStyle.formContainer}>
                <div className={cssStyle.inputContainer}>
                    <Input placeholder="hello" value={inputValue} onChange={setInputValue} />
                </div>
                <Button>Send</Button>
            </div>
        </div>
    );
};

export default Contact;
