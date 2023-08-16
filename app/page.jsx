import cssStyle from "./baseCss/INDEX.module.css";

import Home from "./components/content/Home/Home";

import { getPersonalInformation } from "./(server)/apiRecipient/getPersonalInformation";
import { getSocialNetworkLinks } from "./(server)/apiRecipient/getSocialNetworkLinks";
import { getSkills } from "./(server)/apiRecipient/getSkills";
import { getPortfolioList } from "./(server)/apiRecipient/getPortfolioList";
import About from "./components/content/About/About";
import Skills from "./components/content/Skills/Skills";
import Portfolio from "./components/content/Portfolio/Portfolio";

export default async function Index({}) {
  const personalInformation = await getPersonalInformation();
  const socialNetworkLinks = await getSocialNetworkLinks();
  const skills = await getSkills();
  const portfolioList = await getPortfolioList();

  const dataPack = {
    personalInformation,
    socialNetworkLinks,
    skills,
    portfolioList
  };

  return (
    <div className={cssStyle.content}>
      <Home dataPack={dataPack} />
      <About dataPack={dataPack} />
      <Skills skills={skills} />
      <Portfolio portfolioList={portfolioList} />
    </div>
  );
};