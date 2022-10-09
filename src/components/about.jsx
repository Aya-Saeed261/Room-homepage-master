import darkAbout from "../images/image-about-dark.jpg";
import lightAbout from "../images/image-about-light.jpg";

const About = () => {
  return (
    <div className="about d-flex flex-column flex-lg-row">
      <div className="px-0">
        <img src={darkAbout} alt="" />
      </div>
      <div className="info px-lg-5">
        <h2 className="heading text-uppercase bolder my-3">
          About our furniture
        </h2>
        <p className="description gray mb-0">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="px-0">
        <img src={lightAbout} alt="" />
      </div>
    </div>
  );
};

export default About;
