import cssStyle from "./TextBlock.module.css";

export default function Home({ personalInformation }) {
    return (
        <div className={cssStyle.content}>
            <div className={cssStyle.textBlock}>
                <div className={cssStyle.greeting}>
                    Hi, I'm {personalInformation.EN_firstName} “{personalInformation.nickName}”
                </div>
                <div className={cssStyle.whoMe}>
                    {personalInformation.whoMe}
                </div>
                <div className={cssStyle.soLitleInfoForMe}>
                    {personalInformation.smallDescription}
                </div>
            </div>
        </div>
    );
};