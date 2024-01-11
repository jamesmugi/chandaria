import { Link } from "react-router-dom";
import { partners } from "../utils/Data/Partners";

const Partners = () => {
  return (
    <div className="projects-container" style={{ marginTop: "7rem" }}>
      {/* <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide">
            <div className="image-holder">
              <img src={partners?.image} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{partners?.title}</h1>
            </div>
          </div>
        </div>
      </section> */}

      <section className="projects-section ">
        <h1 className="title">{partners?.title}</h1>
        <div className="sub-title">{partners?.subtitle}</div>

        <div className="projects-holder max-width">
          {partners?.partners?.map((partner, partnerKey) => (
            <Link
              to={`/partners/${partner?.path}`}
              className="project-card innovation partner"
              key={partnerKey}
            >
              <div className="project-icon partner">
                <img src={partner?.icon} alt={`${partner?.title} logo`} />
              </div>
              <div className="content">
                <div className="project-title">{partner?.title}</div>
                <div className="project-description">
                  {partner?.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;
