import { Link, useParams } from "react-router-dom";
import { services } from "../utils/Data/Services";
import { useEffect } from "react";

const Services = () => {
  const urlParams = useParams();

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  }, [urlParams?.tab]);

  return (
    <div className="services-container">
      <div
        className="categories-section max-width"
        style={{ marginTop: "7rem" }}
      >
        {/* <div className="selector-tab">
          {urlParams?.tab ? (
            <NavLink to="/services/tabs/procedures-support" className="tab">
              Procedures &amp; Support
            </NavLink>
          ) : (
            <NavLink
              to="/services/tabs/procedures-support"
              className="tab active"
            >
              Procedures &amp; Support
            </NavLink>
          )}
          <NavLink to="/services/tabs/services" className="tab">
            Services
          </NavLink>
        </div> */}
      </div>
      <div className="serivices-contents max-width">
        {urlParams?.tab === "procedures-support" && (
          <div className="service-section max-width">
            <div
              contentEditable={false}
              className="service-richtext-description"
              dangerouslySetInnerHTML={{
                __html: services?.serviceDesc,
              }}
            />
          </div>
        )}

        {(urlParams?.tab === "services" || urlParams?.tab === undefined) && (
          <div className="services-section">
            <div className="title">{services?.title}</div>
            <div className="subtitle">{services?.subtitle}</div>
            <div className="services-holder max-width">
              {services?.services?.map((service, serviceKey) => (
                <Link
                  to={`/services/${service?.path}`}
                  className="service-card"
                  key={serviceKey}
                >
                  <div className="icon">
                    <i className={service?.icon}></i>
                  </div>
                  <div className="service-title">{service?.title}</div>
                  <div
                    contentEditable={false}
                    className="service-description"
                    dangerouslySetInnerHTML={{
                      __html: service?.description,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
