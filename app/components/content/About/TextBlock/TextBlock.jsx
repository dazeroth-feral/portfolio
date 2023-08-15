import cssStyle from "./TextBlock.module.css";

const TextBlock = ({ middleDescription }) => {
    return (
        <div className={cssStyle.content}>
            <div className="componentH1">
                About <span className="BLUE">Me</span>
            </div>
            <div className="componentP">
                { middleDescription }
            </div>
        </div>
    );
}
 
export default TextBlock;