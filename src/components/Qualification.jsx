const educationData = [
  {
    title: 'Informatics Engineering',
    institution: 'Tadulako University',
    period: '2020 - Present',
    description: 'Following the Informatics Engineering study program at Tadulako University since 2020, with a focus on developing skills in programming, software engineering, embedded systems, and Internet of Things (IoT) technology. Actively participating in various projects and research related to modern technology and digital innovation.',
  },
  {
    title: 'Artificial Intelligence',
    institution: 'Startup Campus',
    period: 'August 2023 - December 2023',
    description: 'Participated in the Artificial Intelligence program at Startup Campus from August 2023 to December 2023. This program focused on deepening knowledge and skills in AI, including machine learning, data analysis, and AI model development. Actively engaged in innovative projects, working on real-world case studies, and collaborating in teams to create AI-based solutions tailored to industry needs. This experience enhanced my understanding of AI applications in modern technology and strengthened my ability to apply AI techniques to solve complex problems.',
  },
  {
    title: 'Hardware Engineering',
    institution: 'PT. Stechoq Robotika Indonesia',
    period: 'February 2023 - June 2023',
    description: 'Studied Hardware Engineering at PT. Stechoq Robotika Indonesia from February 2023 to June 2023. Focused on learning the design, development, and testing of hardware components for robotic systems, embedded devices, and IoT applications. Gained hands-on experience in PCB design, circuit analysis, and prototyping, contributing to innovative robotic solutions. Collaborated with multidisciplinary teams to understand the integration of hardware with software, ensuring system functionality and performance. This experience enhanced my knowledge in hardware engineering, problem-solving, and the practical application of engineering principles in real-world scenarios.',
  },
];

const experienceData = [
  // {
  //   title: 'Web Designer',
  //   company: 'Soft Company',
  //   period: '2000 - 2050',
  //   description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam.',
  // },
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
                    <p className="text-justify">{edu.description}</p>
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
                    <p className="text-justify">{exp.description}</p>
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
