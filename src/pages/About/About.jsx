import Article from "../../components/Article";
import SideContent from "../../components/SideContent";

import cv from "../../assets/cv.pdf";

const About = () => {
  return (
    <main className="page">
      <section className="section">
        <Article
          title="À propos"
          text={`Développeur web depuis 3 ans maintenant, je suis à la recherche de projets front-end me permettant d'élargir mes compétences et renforcer mon expertise.

          La conception d’interfaces est mon activité favorite mais j’éprouve également un intérêt pour la partie back-end du métier au travers de la création d’API.
          
          Si mon profil a suscité votre curiosité, je vous invite à cliquer sur le lien ci-dessous.`}
          links={[
            {
              size: "large",
              name: "Télécharger mon CV",
              url: cv,
              download: true
            }
          ]}
        />
        <SideContent icon="logo" size="50%" />
      </section>
    </main>
  );
};

export default About;
