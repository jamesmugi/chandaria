import { Link } from "react-router-dom";
import { homepage } from "../utils/Data/Homepage";
import React, { useEffect } from "react";

const Home = () => {
  function draggable() {
    const slider = document.querySelector(".events-holder");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  function scrollLeft() {
    const eventsHolder = document.querySelector(".events-holder");
    eventsHolder.scrollLeft -= 200;
  }

  function scrollRight() {
    const eventsHolder = document.querySelector(".events-holder");
    eventsHolder.scrollLeft += 200;
  }
  useEffect(() => {
    draggable();
    sliderFunction();
  }, []);
  return (
    <div className="home-container">
      <section className="hero">
        <div className="carousel">
          {homepage?.carousel?.map((carouselItem, carouselIndex) => (
            <div className="carousel-slide" key={carouselIndex}>
              <div className="image-holder">
                <img src={carouselItem?.image} alt="" />
              </div>
              <div className="carousel-text">
                <h1 className="title">{carouselItem?.title}</h1>
                <p className="sub-title">{carouselItem?.subtitle}</p>

                <div className="call-to-action"></div>
              </div>
            </div>
          ))}

          <div className="controls">
            <div className="navigations">
              <div className="navigator">
                <div className="icon" id="prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
              </div>
              <div className="navigator next">
                <div className="icon" id="next">
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="indicator">
              {homepage?.carousel?.map((carouselItem, carouselIndex) => (
                <div className="indicators" key={carouselIndex}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="offers max-width">
        <h2 className="title center">{homepage?.what_we_offer?.title}</h2>
        <div className="sub-title center">
          {homepage?.what_we_offer?.description}
        </div>

        <div className="offers-holder">
          {homepage?.what_we_offer?.offers?.map((offer, offerKey) => (
            <React.Fragment key={offerKey}>
              {!offer?.external ? (
                <Link to={`/${offer?.path}`} className="offer" key={offerKey}>
                  <div className="image-holder">
                    <img src={offer?.image} alt="" />
                  </div>
                  <div className="offer-details">
                    <h3 className="offer-title">{offer?.title}</h3>
                    <div
                      contentEditable={false}
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: offer?.description,
                      }}
                    />
                  </div>
                </Link>
              ) : (
                <a
                  target="_blank"
                  href={`${offer?.path}`}
                  className="offer"
                  key={offerKey}
                  rel="noreferrer"
                >
                  <div className="image-holder">
                    <img src={offer?.image} alt={offer?.title} />
                  </div>
                  <div className="offer-details">
                    <h3 className="offer-title">{offer?.title}</h3>
                    <div
                      contentEditable={false}
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: offer?.description,
                      }}
                    />
                  </div>
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="news-board max-width">
        <h2 className="title center white">Event Board</h2>
        <div className="nav-btns">
          <button className="nav-btn" onClick={scrollLeft}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="nav-btn" onClick={scrollRight}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div className="events-holder">
          {homepage?.events?.map((event, eventKey) => (
            <div className="event-card" key={eventKey}>
              <div className="card-image">
                <img src={event?.image} alt="Image 1" />
              </div>
              <div className="card-details">
                <div className="card-date">{event.date}</div>
                <div className="other-text">
                  <div className="card-title">{event.name}</div>
                  <div className="card-desc">{event.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

function sliderFunction() {
  var currentSlide = 0;
  const Slides = document.querySelectorAll(".carousel-slide");
  const nextIndicator = document.getElementById("next");
  const prevIndicator = document.getElementById("prev");
  const indicatorContainer = document.querySelector(".indicator");
  const indicators = indicatorContainer.querySelectorAll(".indicators");

  nextIndicator.addEventListener("click", function () {
    next();
  });
  prevIndicator.addEventListener("click", function () {
    prev();
  });

  Slides[0]?.classList.add("active");
  indicators[0]?.classList.add("active");

  const init = (n) => {
    Slides.forEach((largerSlide) => {
      largerSlide?.classList.remove("active");
    });

    indicators?.forEach((indicator) => {
      indicator?.classList.remove("active");
    });
    Slides[n]?.classList.add("active");
    indicators[n]?.classList.add("active");
  };

  indicators?.forEach((indicator, index) => {
    indicator?.addEventListener("click", () => {
      currentSlide = index;
      timer.stop();
      timer.start();
      init(index);
    });
  });

  const next = () => {
    currentSlide >= Slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    init(currentSlide);

    timer.stop();
    timer.start();
  };

  const prev = () => {
    currentSlide <= 0 ? (currentSlide = Slides.length - 1) : currentSlide--;
    init(currentSlide);

    timer.stop();
    timer.start();
  };

  class Timer {
    constructor(fn, t) {
      var timerObj = setInterval(fn, t);

      this.stop = function () {
        if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
        }
        return this;
      };

      // start timer using current settings (if it's not already running)
      this.start = function () {
        if (!timerObj) {
          this.stop();
          timerObj = setInterval(fn, t);
        }
        return this;
      };

      // start with new or original interval, stop current interval
      this.reset = function (newT = t) {
        t = newT;
        return this.stop().start();
      };
    }
  }

  var timer = new Timer(function () {
    next();
  }, 5000);

  document.addEventListener("DOMContentLoaded", () => {
    init(currentSlide);
  });
}
