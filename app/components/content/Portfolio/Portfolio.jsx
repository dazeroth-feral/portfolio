import cssStyle from "./Portfolio.module.css";

import PortfolioPlate from "../../UI/PortfolioPlate/PortfolioPlate";

const Portfolio = ({ portfolioList }) => {
    return (
        <div className={cssStyle.content}>
            <div className="componentH1 text-align-center">
                <span className="BLUE">My</span> Portfolio
            </div>
            <div
                className={cssStyle.blockOfElements}
            >
                {portfolioList.map((element, index) => (
                    <PortfolioPlate key={index} element={element} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
