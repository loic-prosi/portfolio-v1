const Tag = ({ type, text, onClick, active }) => {
  let className = type ? `tag tag--${type}` : "tag";
  className = active ? `${className} tag--active` : className;

  if (type === "filter") {
    return (
      <button className={className} value={text} onClick={onClick}>
        {text}
      </button>
    );
  }

  return <span className={className}>{text}</span>;
};

export default Tag;
