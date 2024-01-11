import { Link } from "react-router-dom";
import location from "../assets/images/icon+svgs/footer_map_image.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container max-width">
        <div className="col">
          <div className="social-links">
            <Link to="/contact" className="social-link">
              <i className="fa fa-at"></i>
              <span>Contact Us</span>
            </Link>
            <Link className="social-link">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </Link>
            <Link className="social-link">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </Link>
            <Link className="social-link">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </Link>
            <Link className="social-link">
              <i className="fab fa-linkedin"></i>
              <span>Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-info">
        <p>
          &copy; 2023 | All Rights Reserved Chandaria Business Innovation &
          Incubation Centre Kenyatta University
        </p>
      </div>
    </div>
  );
};

export default Footer;
