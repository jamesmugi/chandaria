import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollClass, setScrollClass] = useState("");
  const [navStatus, setNavStatus] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (
      window.scrollY >=
      3 * parseInt(getComputedStyle(document.documentElement).fontSize)
    ) {
      setScrollClass("scrolled");
    } else {
      setScrollClass("");
    }
  };

  const navLinks = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    // {
    //   name: "Services",
    //   path: "/services",
    // },
    {
      name: "Innovations",
      path: "/innovations",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Media",
      path: "/media",
    },
    {
      name: "Partners",
      path: "/partners",
    },
    {
      name: "Important Links",
      icon: "fa fa-chevron-down",
      path: "important-links",
      drops: true,
      links: [
        {
          name: "Kenya Industrial Property Institute ",
          path: "https://www.kipi.go.ke/",
        },
        {
          name: "The National Commission for Science and Technology",
          path: "https://www.nacosti.go.ke/",
        },
        {
          name: "National Research Fund",
          path: "https://www.nrf.go.ke/",
        },
        {
          name: "Kenya National Innovation Agency",
          path: "https://www.innovationagency.go.ke/",
        },
        {
          name: "Kenya Industrial Research and Development Institute",
          path: "https://www.kirdi.go.ke/",
        },
      ],
    },
    // {
    //   name: "Contact",
    //   path: "/contact",
    // },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollClass}`}>
      <div className="top-nav">
        <div className="top-col contact-info">
          <Link className="top-link">
            <i className="fa fa-history"></i>
            Open-Hours: 8am to 5pm
          </Link>
          <a
            href="mailto:director-innovationsupport@ku.ac.ke"
            className="top-link"
          >
            <i className="fa fa-envelope"></i>
            director-innovationsupport@ku.ac.ke
          </a>
        </div>
        <div className="top-col social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://forms.gle/1SCqqRySk85CLgpdA"
            className="btn secondary"
          >
            Submit Application
          </a>
        </div>
      </div>
      <div className="bottom-nav">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div
          className={navStatus ? "hamburger active" : "hamburger"}
          onClick={() => setNavStatus(!navStatus)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={navStatus ? "nav-links active" : "nav-links"}>
          {navLinks?.map((link, linkIndex) => (
            <React.Fragment key={linkIndex}>
              {location?.pathname === "/" && linkIndex === 0 ? (
                <NavLink
                  key={linkIndex}
                  to={link.path}
                  className="nav-link active"
                  onClick={() => setNavStatus(false)}
                >
                  {link.name} <i className={link?.icon}></i>
                </NavLink>
              ) : (
                <>
                  {link?.drops ? (
                    <div
                      key={linkIndex}
                      to={link.path}
                      className="nav-link drops"
                    >
                      <div className="text">
                        {link?.name}
                        <i className={link?.icon}></i>
                      </div>
                      <div className="dropdown-links">
                        {link?.links?.map((dropLink, dropLinkIndex) => (
                          <a
                            href={dropLink?.path}
                            target="_blank"
                            className="drop-link"
                            key={dropLinkIndex}
                            rel="noreferrer"
                          >
                            {dropLink?.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={linkIndex}
                      to={link.path}
                      className="nav-link"
                      onClick={() => setNavStatus(false)}
                    >
                      {link.name} <i className={link?.icon}></i>
                    </NavLink>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
