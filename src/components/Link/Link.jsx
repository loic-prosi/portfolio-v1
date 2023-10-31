import { Link as ReactRouterLink } from "react-router-dom";

import Icon from "../Icon";

const Link = ({ link }) => {
  const { size, name, url, icon, iconSize, download } = link;

  const isLargeLink = size && size === "large";
  const linkClassName = `link ${isLargeLink ? "link--large" : ""}`;

  if (url) {
    if (download) {
      return (
        <a className={linkClassName} href={url} download>
          {icon && <Icon name={icon} size={iconSize} />}
          {name}
        </a>
      );
    }
    return (
      <ReactRouterLink className={linkClassName} to={url}>
        {icon && <Icon name={icon} size={iconSize} />}
        {name}
      </ReactRouterLink>
    );
  }
};

export default Link;
