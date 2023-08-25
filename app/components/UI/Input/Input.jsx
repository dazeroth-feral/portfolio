import cssStyle from "./Input.module.css";

const Input = ({ type = "text", placeholder = "", value, onChange }) => {
    return(
        <input 
            className={cssStyle.content}
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={event => onChange(event.target.value)}
        />
    );
};

export default Input;