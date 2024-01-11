import { useParams } from "react-router-dom";
import { partners } from "../utils/Data/Partners";

const PartnersView = () => {
  const urlParams = useParams();

  const partnerz = partners?.partners?.filter(
    (partners) => partners?.path === urlParams?.path
  )[0];
  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide person">
            <div className="image-holder">
              <img src={partnerz?.icon} alt="" />
            </div>
            <div className="smaller-image contain">
              <img src={partnerz?.icon} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{partnerz?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h1 className="title">
          Partnership with <span>{partnerz?.title}</span>
        </h1>
        <div className="content-view max-width">
          <p>{partnerz?.description}</p>
        </div>
      </section>
    </div>
  );
};

export default PartnersView;
