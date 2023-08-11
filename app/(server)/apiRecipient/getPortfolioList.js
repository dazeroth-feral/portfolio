export const getPortfolioList = async () => {
    const response = await fetch("http://localhost:3000/api/portfolioList");
    const portfolioList = await response.json();

    return portfolioList;
};