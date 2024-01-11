import { Link, NavLink, useParams } from "react-router-dom";
import { gallery } from "../utils/Data/Gallery";
import { useEffect } from "react";

const Gallery = () => {
  const urlParams = useParams();

  useEffect(() => {
    if (urlParams?.category) {
      window.scrollTo({
        top: 100,
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
    <div className="services-container">
      {/* <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide">
            <div className="image-holder">
              <img src={gallery?.image} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{gallery?.title}</h1>
            </div>
          </div>
        </div>
      </section> */}
      <div className="media-container">
        <div className="categories-section max-width">
          <div className="selector-tab">
            {urlParams?.category ? (
              <NavLink to="/media/news" className="tab">
                News
              </NavLink>
            ) : (
              <NavLink to="/media/news" className="tab active">
                News
              </NavLink>
            )}
            <NavLink to="/media/gallery" className="tab">
              Gallery
            </NavLink>
          </div>
        </div>
        {(urlParams?.category === undefined ||
          urlParams?.category === "news") && (
          <div className="news-media max-width">
            {/* <h2 className="title">Newsletters</h2> */}
            {/* <div className="subtitle"></div> */}
            <div className="newsletters-grid" style={{ margin: "2rem 0" }}>
              {gallery?.newsletters?.map((news, newsKey) => (
                <Link
                  to={`/media/newsletter/${news?.path}`}
                  className="newsletter"
                  key={newsKey}
                >
                  <div className="newsletter-image">
                    <img src={news?.images[0]} alt="" />
                  </div>
                  <div className="newsletter-content">
                    <div className="newsletter-title">{news.title}</div>
                    <div className="newsletter-desc">{news?.message}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {urlParams?.category === "gallery" && (
          <div className="services-section gallery-section ">
            {/* <div className="title">{gallery?.title}</div>
            <div className="subtitle">{gallery?.subtitle}</div> */}
            <div className="gallery-holder max-width">
              {gallery?.images?.map((image, imageKey) => (
                <a
                  href={image?.image}
                  data-lightbox="models"
                  // data-title={image?.title}
                  key={imageKey}
                  className={`gallery-image ${randomSelector()}`}
                >
                  <img src={image?.image} alt={image?.title} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

function randomSelector() {
  const stringsWithBiases = [
    { string: "wide", bias: 0.3 },
    { string: "big", bias: 0.3 },
    { string: "", bias: 0.5 },
    { string: "tall", bias: 0.2 },
  ];
  const totalBias = stringsWithBiases.reduce((acc, obj) => acc + obj.bias, 0);

  const randomValue = Math.random() * totalBias;

  let cumulativeBias = 0;
  for (const obj of stringsWithBiases) {
    cumulativeBias += obj.bias;
    if (randomValue <= cumulativeBias) {
      return obj.string;
    }
  }

  return stringsWithBiases[stringsWithBiases.length - 1].string;
}
