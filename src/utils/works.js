import imgAvec from "../assets/images/avec.webp";
import imgJustMining from "../assets/images/just-mining.webp";
import imgP2 from "../assets/images/oc-web-dev-p2.webp";
import imgP3 from "../assets/images/oc-web-dev-p3.webp";
import imgP4 from "../assets/images/oc-web-dev-p4.webp";
import imgP5 from "../assets/images/oc-web-dev-p5.webp";
import imgP6 from "../assets/images/oc-web-dev-p6.webp";
import imgP7 from "../assets/images/oc-web-dev-p7.webp";

const images = {
  avec: imgAvec,
  "just-mining": imgJustMining,
  "oc-web-dev-p2": imgP2,
  "oc-web-dev-p3": imgP3,
  "oc-web-dev-p4": imgP4,
  "oc-web-dev-p5": imgP5,
  "oc-web-dev-p6": imgP6,
  "oc-web-dev-p7": imgP7
};

export const findWork = (params, works, skills) => {
  const { id } = params;
  const work = works.find((work) => work.id === id);
  if (work) {
    const consolidatedWork = consolidateWork(work, skills);
    return { work: consolidatedWork };
  } else {
    throw new Response("Work not found", { status: 404 });
  }
};

const consolidateWork = (work, skills) => {
  let consolidatedWork = { ...work };

  let skillsConsolidated = [];
  for (let skillId of work.skills) {
    const skill = skills.find((skill) => skillId === skill.id);
    skillsConsolidated.push(skill);
  }

  let categories = [];
  let skillsNames = [];
  for (let skill of skillsConsolidated) {
    if (skill && skill.category && !categories.includes(skill.category)) {
      categories.push(skill.category);
    }
    skillsNames.push(skill.name);
  }

  consolidatedWork.skills = skillsConsolidated;
  consolidatedWork.skillsNames = skillsNames;
  consolidatedWork.categories = categories;
  consolidatedWork.image = images[work.id];

  return consolidatedWork;
};

export const consolidateWorks = (works, skills) => {
  let consolidatedWorks = [];

  for (let work of works) {
    const consolidatedWork = consolidateWork(work, skills);
    consolidatedWorks.push(consolidatedWork);
  }
  return { works: consolidatedWorks };
};
