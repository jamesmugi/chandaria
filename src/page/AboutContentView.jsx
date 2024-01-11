import { useLocation, useParams } from "react-router-dom";
import { aboutUs } from "../utils/Data/About";

const AboutContentView = () => {
  const urlParams = useParams();
  const location = useLocation();

  const content = aboutUs?.content?.filter(
    (content) => content?.path === urlParams?.path
  )[0];

  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div
            className={
              location.pathname.includes("/director-message")
                ? "carousel-slide person"
                : "carousel-slide"
            }
          >
            <div className="image-holder">
              <img src={content?.image} alt="" />
            </div>
            <div className="smaller-image">
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
            ></div>
          </div>
        </section>
      ) : (
        <section className="projects-section">
          <h1 className="title">{content?.title}</h1>
          <div className="content-view max-width">
            {content?.message?.map((message, messageKey) => (
              <>
                <p key={messageKey}>{message}</p> <br />
              </>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutContentView;
