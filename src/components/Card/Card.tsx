import { Link } from "react-router-dom";

import Tag from "../Tag";

interface CardProps {
  id: string;
  name: string;
  year: number | string;
  image: string;
  categories: Array<string>;
}

const Card = ({
  id,
  name,
  year,
  image,
  categories
}: CardProps): React.ReactElement => {
  const renderTags = () => {
    return categories.map((category, index) => (
      <Tag key={`${index}-${category}`} type="card" text={category} />
    ));
  };

  return (
    <Link className="card" to={`/projects/${id}`}>
      {image ? (
        <img className="card__image" src={image} alt={name} />
      ) : (
        <div className="card__image-placeholder"></div>
      )}
      <div className="card__heading">
        <h3 className="card__title">{name}</h3>
        <p className="card__subtitle">{year}</p>
      </div>
      {categories && <div className="card__categories">{renderTags()}</div>}
    </Link>
  );
};

export default Card;
