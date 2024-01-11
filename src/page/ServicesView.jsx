import { useParams } from "react-router-dom";
import { services } from "../utils/Data/Services";

const ServicesView = () => {
  const urlParams = useParams();

  const service = services?.services?.filter(
    (service) => service?.path === urlParams?.path
  )[0];

  return (
    <div className="projects-container">
      {service?.banner && (
        <section className="hero smaller">
          <div className="carousel">
            <div className="carousel-slide person">
              <div className="image-holder">
                <img src={service?.banner} alt="" />
              </div>
              <div className="smaller-image contain">
                <img src={service?.banner} alt="" />
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className="projects-section start"
        style={
          !service?.banner
            ? { marginTop: "7rem", minHeight: "70vh" }
            : { marginTop: "0" }
        }
      >
        <h1 className="title">{service?.title}</h1>
        <div className="content-view max-width">
          <div
            contentEditable={false}
            className="service-description"
            dangerouslySetInnerHTML={{
              __html: service?.description,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesView;
