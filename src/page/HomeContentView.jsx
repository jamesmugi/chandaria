import { NavLink, useParams } from "react-router-dom";
import { homepage } from "../utils/Data/Homepage";
import { useEffect } from "react";

const HomeContentView = () => {
  const urlParams = useParams();

  const content = homepage?.what_we_offer?.offers?.filter(
    (content) =>
      content?.path === urlParams?.path ||
      content?.path?.includes(urlParams?.path)
  )[0];

  const category = content?.categories?.filter((cat) =>
    cat?.path?.includes(urlParams?.category)
  )[0]
    ? content?.categories?.filter((cat) =>
        cat?.path?.includes(urlParams?.category)
      )[0]
    : content?.categories?.[0];

  useEffect(() => {
    if (urlParams?.category) {
      window.scrollTo({
        top: 1300,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [urlParams?.category]);

  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide">
            <div className="image-holder">
              <img src={content?.image} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{content?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h1 className="title">{content?.title}</h1>
        <div className="content-view max-width">
          <div
            contentEditable={false}
            className="content-description"
            dangerouslySetInnerHTML={{
              __html: content?.description,
            }}
          />
        </div>

        {category && (
          <>
            <div className="categories-section max-width">
              <div className="selector-tab no-margin">
                {content?.categories?.map((category, index) => (
                  <>
                    <NavLink
                      to={`/${category?.path}`}
                      className={`${
                        index === 0 && !urlParams?.category && "active"
                      } tab small`}
                      key={index}
                    >
                      {category?.subTitle}
                    </NavLink>
                  </>
                ))}
              </div>
            </div>

            <div className="content-view max-width">
              <h2 className="title">{category?.title}</h2>
              <div
                contentEditable={false}
                className="content-description"
                dangerouslySetInnerHTML={{
                  __html: category?.description,
                }}
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default HomeContentView;
