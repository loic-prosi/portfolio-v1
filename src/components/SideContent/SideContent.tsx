import Icon from "../Icon/Icon";

interface SideContentPropTypes {
  image?: string;
  alt?: string;
  icon?: string;
  size?: string;
  text?: string;
}

const SideContent = ({
  image,
  alt,
  icon,
  size,
  text
}: SideContentPropTypes): React.ReactElement => {
  if (text) {
    return (
      <aside className="aside">
        <span className="aside__text">{text}</span>
      </aside>
    );
  }
  if (icon) {
    return (
      <figure className="figure">
        <Icon name={icon} size={size} alt={alt} />
      </figure>
    );
  }
  return (
    <figure className="figure">
      <img className="figure__image" src={image} alt={alt} />
    </figure>
  );
};

export default SideContent;
