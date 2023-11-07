import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Article from "../../components/Article";
import Card from "../../components/Card";
import Separator from "../../components/Separator";
import Tag from "../../components/Tag/Tag";

import { WorkConsolidatedTypes } from "../../utils/works";

interface ProjectsDataTypes {
  works: Array<WorkConsolidatedTypes>;
}

const Projects = (): React.ReactElement => {
  const { works } = useLoaderData() as ProjectsDataTypes;
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [currentFilter, setCurrentFilter] = useState("Tous");

  const filters = ["Tous", "Front-end", "Back-end", "Gestion de projet"];

  const filterWorks = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.value !== "Tous") {
      let filteredWorks = works.filter((work: WorkConsolidatedTypes) =>
        work.categories.includes(e.currentTarget.value)
      );
      setFilteredWorks(filteredWorks);
    } else {
      setFilteredWorks(works);
    }
    setCurrentFilter(e.currentTarget.value);
  };

  const renderFilters = () => {
    return filters.map((filter, index) => (
      <Tag
        key={`${index}-${filter}`}
        type="filter"
        text={filter}
        onClick={(e) => filterWorks(e)}
        active={currentFilter === filter ? true : false}
      />
    ));
  };

  return (
    <main className="page page--projects">
      <Article
        title="Mes projets"
        text="Découvrez mon travail à travers une sélection de projets variés. Parcourez-les pour en apprendre davantage sur mon expérience et mes compétences."
      />
      <Separator
        text={`${filteredWorks.length} projet${
          filteredWorks.length > 1 ? "s" : ""
        }`}
      />
      <div className="projects__filters">{renderFilters()}</div>
      <div className="projects__list">
        {filteredWorks &&
          filteredWorks.map((work: WorkConsolidatedTypes) => (
            <Card
              key={work.id}
              id={work.id}
              image={work.image}
              name={work.name}
              year={work.year}
              categories={work.categories}
            />
          ))}
      </div>
    </main>
  );
};

export default Projects;
