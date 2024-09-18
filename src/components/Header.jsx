import { useEffect } from 'react';
import Typed from 'typed.js';

const Header = () => {
  useEffect(() => {
    const typed = new Typed('.typed-text-output', {
      strings: ['Embedded Systems Engineer',
                'IoT Specialist',
                'Robotics Engineer',
                'PCB Designer',
                'Electronic Schematic Designer',
                'UI/UX Designer',
                'Web Developer',
                'Machine Learning & Deep Learning Expert',
                'Design & Multimedia Specialist'
              ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img className="img-fluid w-100 rounded-circle shadow-lg" src="./public/assets/img/profile.jpg" alt="Profile" />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
              <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>USAMA</h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href="./public/assets/cv/cv.pdf" className="btn btn-outline-light mr-5" target="_blank" rel="noopener noreferrer">Download CV</a>
                <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
