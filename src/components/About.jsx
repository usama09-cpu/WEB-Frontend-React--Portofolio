const About = () => {
  return (
    <div>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              About
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              About Me
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img
                className="img-fluid rounded w-100"
                src="./assets/img/profile.jpg"
                alt="About Me"
              />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">
                An enthusiast with a passion for Embedded Systems, IoT, and
                Robotics.
              </h3>
              <p className="text-justify">
                I am a Bachelor of Informatics Engineering from Tadulako University with a strong passion for AI-powered systems, Embedded Systems, and Software Development. Experienced in developing intelligent automation systems and hardware-software integration projects using modern technologies.
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name: <span className="text-secondary">Usama</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Birthday:{" "}
                    <span className="text-secondary">1 January 2002</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Email:{" "}
                    <span className="text-secondary">
                      uusaamaa0901@gmail.com
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Freelance: <span className="text-secondary">Available</span>
                  </h6>
                </div>
              </div>
              <a
                href="mailto:uusaamaa0901@gmail.com"
                className="btn btn-outline-primary mr-4"
              >
                Hire Me
              </a>
              <a href="#" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
