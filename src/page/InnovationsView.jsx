import { useParams } from "react-router-dom";
import { innovations } from "../utils/Data/Innovations";

const InnovationsView = () => {
  const urlParams = useParams();

  const innovation = innovations?.innovations?.filter(
    (innovation) => innovation?.path === urlParams?.path
  )[0];

  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide person">
            <div className="image-holder">
              <img src={innovation?.icon} alt="" />
            </div>
            <div className="smaller-image contain">
              <img src={innovation?.icon} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{innovation?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h1 className="title">{innovation?.title}</h1>
        <div className="content-view max-width">
          <p>{innovation?.description}</p>
          <br />
          <br />
          {innovation?.link && (
            <p className="external-link">
              Click here to checkout more about{" "}
              <a href={innovation?.link} target="_blank" rel="noreferrer">
                <span>{innovation?.title}</span>{" "}
                <i className="fas fa-up-right-from-square"></i>
              </a>
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default InnovationsView;
