import { useLoaderData } from "react-router-dom";

import Article from "../../components/Article";
import SideContent from "../../components/SideContent";

const Project = () => {
  const { work } = useLoaderData();

  return (
    <main className="page">
      <section className="section">
        <Article
          info={work.year}
          title={work.name}
          tags={work.skillsNames}
          text={work.description}
          links={[
            {
              name: "Site web",
              url: work.url,
              icon: "fa website"
            },
            {
              name: "Code source",
              url: work.github,
              icon: "fa github"
            }
          ]}
        />
        <SideContent image={work.image} alt={work.name} />
      </section>
    </main>
  );
};

export default Project;
