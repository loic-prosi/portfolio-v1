interface SeparatorPropTypes {
  text: string;
}

const Separator = ({ text }: SeparatorPropTypes): React.ReactElement => {
  return (
    <div className="separator">
      <span className="separator__text">{text}</span>
      <div className="separator__line"></div>
    </div>
  );
};

export default Separator;
