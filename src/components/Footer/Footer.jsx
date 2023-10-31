import Link from "../Link";

const Footer = () => {
  return (
    <footer className="footer">
      <span>Loïc Prosi - 2023</span>
      <Link
        link={{
          name: "Code source",
          url: "https://github.com/loic-prosi/oc-web-dev-p8",
          icon: "fa github"
        }}
      />
    </footer>
  );
};

export default Footer;
