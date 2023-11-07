import Link from "../Link";

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer">
      <span>Loïc Prosi - 2023</span>
      <Link
        name="Code source"
        url="https://github.com/loic-prosi/oc-web-dev-p8"
        icon="fa github"
      />
    </footer>
  );
};

export default Footer;
