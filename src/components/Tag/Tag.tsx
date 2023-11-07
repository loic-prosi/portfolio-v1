interface TagPropTypes {
  type?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}

const Tag = ({
  type,
  text,
  onClick,
  active
}: TagPropTypes): React.ReactElement => {
  let className = type ? `tag tag--${type}` : "tag";
  className = active ? `${className} tag--active` : className;

  if (type === "filter" && onClick) {
    return (
      <button className={className} value={text} onClick={(e) => onClick(e)}>
        {text}
      </button>
    );
  }

  return <span className={className}>{text}</span>;
};

export default Tag;
