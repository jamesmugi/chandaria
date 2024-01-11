import { useParams } from "react-router-dom";
import { aboutUs } from "../utils/Data/About";

const TeamView = () => {
  const urlParams = useParams();

  const content = aboutUs?.[urlParams?.team]?.filter(
    (content) => content?.name === urlParams?.person
  )[0];

  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide person">
            <div className="image-holder">
              <img src={content?.image} alt="" />
            </div>
            <div className="smaller-image contain">
              <img src={content?.image} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{content?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {urlParams?.path === "about-us" ? (
        <section className="projects-section">
          <h1 className="title">{content?.title}</h1>

          <div className="content-view max-width">
            <div
              className="careers-details"
              contentEditable={false}
              dangerouslySetInnerHTML={{
                __html: content?.message,
              }}
            />
          </div>
        </section>
      ) : (
        <section className="projects-section">
          <div className="content-view max-width">
            <h1 className="title">{content?.title}</h1>
            <div
              className="careers-details"
              contentEditable={false}
              dangerouslySetInnerHTML={{
                __html: content?.desc,
              }}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default TeamView;
