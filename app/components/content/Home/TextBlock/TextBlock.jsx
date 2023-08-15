import cssStyle from "./TextBlock.module.css";

export default function Home({ personalInformation }) {
    const smallDescription = personalInformation.smallDescription;
    const smallDescriptionSentences = smallDescription.split('. ');

    const smallDescriptionArray = smallDescriptionSentences.map((sentence, index) => {
        if (index === smallDescriptionSentences.length - 1) {
            return sentence;
        } else {
            return `${sentence}.`;
        }
    });

    return (
        <div className={cssStyle.content}>
            <div className="componentH1">
                Hi, I'm {personalInformation.EN_firstName} “{personalInformation.nickName}”
            </div>
            <div className="componentH2">
                <span className="BLUE">
                    {personalInformation.whoMe}
                </span>
            </div>
            <div className="componentP">
                {smallDescriptionArray.map((element, index) => (
                    <div key={index}>
                        {element}
                    </div>
                ))}
            </div>
        </div>
    );
};