import { Link, NavLink, useParams } from "react-router-dom";
import { aboutUs } from "../utils/Data/About";
import React, { useEffect } from "react";

const About = () => {
  const urlParams = useParams();

  useEffect(() => {
    if (urlParams?.team) {
      window.scrollTo({
        top: 1280,
        behavior: "smooth",
      });
    } else {
      if (urlParams?.content) {
        window.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [urlParams?.team, urlParams?.content]);

  return (
    <div className="about-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide">
            <div className="image-holder">
              <img src={aboutUs?.image} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{aboutUs?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="categories-section max-width">
        <div className="selector-tab">
          {urlParams?.content ? (
            <NavLink to="/about/tabs/about_us" className="tab">
              ABOUT US
            </NavLink>
          ) : (
            <NavLink to="/about/tabs/about_us" className="tab active">
              ABOUT US
            </NavLink>
          )}
          <NavLink to="/about/tabs/vision" className="tab">
            OUR VISION
          </NavLink>
          <NavLink to="/about/tabs/mission" className="tab">
            OUR MISSION
          </NavLink>
        </div>
      </div>

      <div className="about-section" style={{ marginTop: "-3rem" }}>
        <div className="about max-width">
          {(urlParams?.content === "about_us" ||
            urlParams?.content === undefined) && (
            <div className="row">
              <div className="col">
                {/* <h2 className="title">About Us</h2> */}
                <div className="description">
                  <div
                    contentEditable={false}
                    dangerouslySetInnerHTML={{
                      __html: aboutUs?.content?.filter(
                        (content) => content?.path === "about-us"
                      )[0]?.message,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          {urlParams?.content === "vision" && (
            <div className="row vision-mission">
              {aboutUs?.content
                ?.filter((content) => content.path === "vision")[0]
                ?.message?.map((vision, visonKey) => (
                  <p key={visonKey}>
                    <div className="quotes">
                      <span>&#34;</span>
                      <span>&#34;</span>
                    </div>
                    {vision}
                  </p>
                ))}
            </div>
          )}
          {urlParams?.content === "mission" && (
            <div className="row vision-mission">
              {aboutUs?.content
                ?.filter((content) => content.path === "mission")[0]
                ?.message?.map((vision, visonKey) => (
                  <React.Fragment key={visonKey}>
                    <p>
                      <div className="quotes">
                        <span>&#34;</span>
                        <span>&#34;</span>
                      </div>

                      {vision}
                    </p>
                  </React.Fragment>
                ))}
            </div>
          )}
        </div>

        <div className="director-message">
          <div className="message-container max-width">
            <h2 className="title">Directors Message</h2>

            <div className="message-row">
              <div className="message-col">
                <div
                  contentEditable={false}
                  className="message-desc"
                  dangerouslySetInnerHTML={{
                    __html: aboutUs?.content?.filter(
                      (content) => content?.path === "director-message"
                    )[0]?.message,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="team-section max-width">
          <div className="teams-selector-tab">
            {urlParams?.team ? (
              <NavLink to="/about/team" className="tab">
                Team
              </NavLink>
            ) : (
              <NavLink to="/about/team" className="tab active">
                Team
              </NavLink>
            )}
            <NavLink to="/about/mentors" className="tab">
              Mentors
            </NavLink>
            <NavLink to="/about/board" className="tab">
              Board
            </NavLink>
          </div>
          {/* {(urlParams?.team === "team" || urlParams?.team === undefined) && ( */}
          <>
            <div className="title">{urlParams?.team}</div>
            <div className="subtitle">
              Have a glimpse of the people steering the hub
            </div>

            <div className="team-holder">
              {aboutUs?.[urlParams?.team ? urlParams?.team : "team"]?.map(
                (team, teamIndex) => (
                  <Link
                    to={`/about/${urlParams?.team ? urlParams?.team : "team"}/${
                      team?.name
                    }`}
                    className="team-card"
                    key={teamIndex}
                  >
                    <div className="team-image">
                      <img src={team?.image} alt="" />
                    </div>
                    <div className="team-content">
                      <div className="team-name">{team?.name}</div>
                      <div className="team-title">{team?.title}</div>
                      <div
                        className="team-desc"
                        contentEditable={false}
                        dangerouslySetInnerHTML={{
                          __html: team?.desc,
                        }}
                      />
                    </div>
                  </Link>
                )
              )}
            </div>
          </>
          {/* )} */}
          {/* {urlParams?.team === "mentors" && (
            <>
              <div className="title">Technical | Professional Mentors</div>
              <div className="subtitle">
                Have a glimpse of the people steering the hub
              </div>

              <div className="team-holder">
                {aboutUs?.mentors?.map((mentor, mentorIndex) => (
                  <Link
                    to={`/about/mentors/${mentor?.name}`}
                    className="team-card"
                    key={mentorIndex}
                  >
                    <div className="team-image">
                      <img src={mentor?.image} alt="" />
                    </div>
                    <div className="team-content">
                      <div className="team-name">{mentor?.name}</div>
                      <div className="team-title">{mentor?.department}</div>
                      <div
                        className="team-desc"
                        contentEditable={false}
                        dangerouslySetInnerHTML={{
                          __html: mentor?.desc,
                        }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default About;
