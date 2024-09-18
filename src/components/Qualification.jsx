const educationData = [
  {
    title: 'Informatics Engineering',
    institution: 'Tadulako University',
    period: '2020 - present',
    description: 'Following the Informatics Engineering study program at Tadulako University since 2020, with a focus on developing skills in programming, software engineering, embedded systems, and Internet of Things (IoT) technology. Actively participating in various projects and research related to modern technology and digital innovation.',
  },
];

const experienceData = [
  {
    title: 'Web Designer',
    company: 'Soft Company',
    period: '2000 - 2050',
    description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam.',
  },
];

const Qualification = () => {
  return (
    <div>
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
              Quality
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                {educationData.map((edu, index) => (
                  <div className="position-relative mb-4" key={index}>
                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                    <h5 className="font-weight-bold mb-1">{edu.title}</h5>
                    <p className="mb-2">
                      <strong>{edu.institution}</strong> | <small>{edu.period}</small>
                    </p>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Experience</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                {experienceData.map((exp, index) => (
                  <div className="position-relative mb-4" key={index}>
                    <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                    <h5 className="font-weight-bold mb-1">{exp.title}</h5>
                    <p className="mb-2">
                      <strong>{exp.company}</strong> | <small>{exp.period}</small>
                    </p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
