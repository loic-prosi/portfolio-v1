const Separator = ({ text }) => {
  return (
    <div className="separator">
      <span className="separator__text">{text}</span>
      <div className="separator__line"></div>
    </div>
  );
};

export default Separator;
