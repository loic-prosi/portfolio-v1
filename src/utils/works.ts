import imgAvec from "../assets/images/avec.webp";
import imgJustMining from "../assets/images/just-mining.webp";
import imgP2 from "../assets/images/oc-web-dev-p2.webp";
import imgP3 from "../assets/images/oc-web-dev-p3.webp";
import imgP4 from "../assets/images/oc-web-dev-p4.webp";
import imgP5 from "../assets/images/oc-web-dev-p5.webp";
import imgP6 from "../assets/images/oc-web-dev-p6.webp";
import imgP7 from "../assets/images/oc-web-dev-p7.webp";

interface WorkTypes {
  id: string;
  name: string;
  description: string;
  skills: Array<string>;
  year: number | string;
  github?: string;
  url?: string;
}

interface SkillTypes {
  id: string;
  name: string;
  category?: string;
}

export interface WorkConsolidatedTypes {
  id: string;
  name: string;
  description: string;
  skills: Array<SkillTypes>;
  skillsNames: Array<string>;
  categories: Array<string>;
  image: string;
  year: number | string;
  github?: string;
  url?: string;
}

export interface ParamsTypes {
  id?: string;
}

const images: Record<string, string> = {
  avec: imgAvec,
  "just-mining": imgJustMining,
  "oc-web-dev-p2": imgP2,
  "oc-web-dev-p3": imgP3,
  "oc-web-dev-p4": imgP4,
  "oc-web-dev-p5": imgP5,
  "oc-web-dev-p6": imgP6,
  "oc-web-dev-p7": imgP7
};

export const findWork = (
  params: ParamsTypes,
  works: Array<WorkTypes>,
  skills: Array<SkillTypes>
) => {
  const { id } = params;
  const work = works.find((work) => work.id === id);
  if (work) {
    const consolidatedWork = consolidateWork(work, skills);
    return { work: consolidatedWork };
  } else {
    throw new Response("Work not found", { status: 404 });
  }
};

const consolidateWork = (work: WorkTypes, skills: Array<SkillTypes>) => {
  let skillsConsolidated: Array<SkillTypes> = [];
  for (let skillId of work.skills) {
    const skill = skills.find((skill) => skillId === skill.id);
    if (skill) {
      skillsConsolidated.push(skill);
    }
  }

  let categories: Array<string> = [];
  let skillsNames: Array<string> = [];
  for (let skill of skillsConsolidated) {
    if (skill && skill.category && !categories.includes(skill.category)) {
      categories.push(skill.category);
    }
    if (skill) {
      skillsNames.push(skill.name);
    }
  }

  const consolidatedWork: WorkConsolidatedTypes = {
    ...work,
    skills: skillsConsolidated,
    skillsNames,
    categories,
    image: images[work.id]
  };

  return consolidatedWork;
};

export const consolidateWorks = (
  works: Array<WorkTypes>,
  skills: Array<SkillTypes>
) => {
  let consolidatedWorks = [];

  for (let work of works) {
    const consolidatedWork = consolidateWork(work, skills);
    consolidatedWorks.push(consolidatedWork);
  }
  return { works: consolidatedWorks };
};
