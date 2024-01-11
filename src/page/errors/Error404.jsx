import { Link } from "react-router-dom";
import image from "../../assets/images/icon+svgs/404.png";
const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-image">
        <img src={image} alt="" />
      </div>
      <div className="error-text">
        <p>
          We are unable to find the page you are looking for,
          <br />
          <span>{window.location.href}</span>
        </p>

        <Link to="/" className="btn">
          <i className="fa fa-arrow-left"></i> Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
