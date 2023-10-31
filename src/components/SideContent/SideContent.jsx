import Icon from "../Icon/Icon";

const SideContent = ({ image, alt, icon, size, text }) => {
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
        <Icon className="figure__icon" name={icon} size={size} />
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
