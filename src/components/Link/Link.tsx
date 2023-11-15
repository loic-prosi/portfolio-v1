import { Link as ReactRouterLink } from "react-router-dom";

import Icon from "../Icon";

export interface LinkPropTypes {
  size?: string;
  name: string;
  url?: string;
  icon?: string;
  iconSize?: string;
  download?: boolean;
}

const Link = ({
  size,
  name,
  url,
  icon,
  iconSize,
  download
}: LinkPropTypes): React.ReactElement => {
  const isLargeLink = size && size === "large";
  const linkClassName = `link ${isLargeLink ? "link--large" : ""}`;
  const path = url ? url : "/";

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
      <ReactRouterLink className={linkClassName} to={path}>
        {icon && <Icon name={icon} size={iconSize} />}
        {name}
      </ReactRouterLink>
    );
  } else {
    return <></>;
  }
};

export default Link;
