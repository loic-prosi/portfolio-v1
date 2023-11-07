import Link from "../Link";
import Tag from "../Tag";

import { LinkPropTypes } from "../Link";

interface ArticlePropTypes {
  info?: number | string;
  title: string;
  text?: string;
  tags?: Array<string>;
  links?: Array<LinkPropTypes>;
}

const Article = ({
  info,
  title,
  text,
  tags,
  links
}: ArticlePropTypes): React.ReactElement => {
  const renderTags = () => {
    return (
      tags &&
      tags.map((tag, index) => <Tag key={`${index}-${tag}`} text={tag} />)
    );
  };

  const renderLinks = () => {
    return (
      links && links.map((link, index) => <Link key={`${index}`} {...link} />)
    );
  };

  return (
    <article className="article">
      <header className="article__heading">
        {info && <p className="article__info">{info}</p>}
        <h2 className="article__title">{title}</h2>
      </header>
      {tags && <div className="article__tags">{renderTags()}</div>}
      <p className="article__text">{text}</p>
      {links && <div className="article__links">{renderLinks()}</div>}
    </article>
  );
};

export default Article;
