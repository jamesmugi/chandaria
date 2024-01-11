const Contact = () => {
  return (
    <div
      className="contact-us-container max-width"
      style={{ marginTop: "7rem" }}
    >
      <h1 className="title">Contact Us</h1>
      <div className="description">
        Any questions or remarks? write us a message or visit our offices
      </div>

      <div className="other-info">
        <div className="other-info-card">
          <div className="icon">
            <i className="fa fa-info-circle"></i>
          </div>
          <h4 className="info-title">Information</h4>
          <div className="desc">
            Email: <span>director-innovationsupport@ku.ac.ke</span>
            <br />
            Website: <span>http://www.ku.ac.ke/iiuil/</span>
          </div>
        </div>
        <div className="other-info-card">
          <div className="icon">
            <i className="fa fa-phone"></i>
          </div>
          <h4 className="info-title">Phone</h4>
          <div className="desc">
            Telephone: <span>+254 020 8703870</span>
            <br />
            Cell phone: <span>+254 700 363 741</span>
          </div>
        </div>
        <div className="other-info-card">
          <div className="icon">
            <i className="fa fa-location-dot"></i>
          </div>
          <h4 className="info-title">Location</h4>
          <div className="desc">
            2nd Floor, Chandaria Innovation Centre Building Kenya Drive Next to
            KU Main Gate
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
