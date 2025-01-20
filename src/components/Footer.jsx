const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5"
        id="footer"
      >
        <div className="container text-center py-5">
          <div className="d-flex justify-content-center mb-4">
            <a
              className="btn btn-light btn-social mr-2"
              href="mailto:uusaamaa_@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-light btn-social mr-2"
              href="https://www.instagram.com/uusaamaa_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-light btn-social mr-2"
              href="https://www.linkedin.com/in/uusaamaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-light btn-social"
              href="https://github.com/usama09-cpu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a className="text-white" href="#">
              Privacy
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Terms
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              FAQs
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Help
            </a>
          </div>
          <p className="m-0">
            &copy;{" "}
            <a className="text-white font-weight-bold" href="#">
              uusaamaa_
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
