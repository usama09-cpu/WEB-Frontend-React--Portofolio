const educationData = [
  {
    title: "Informatics Engineering",
    institution: "Tadulako University",
    period: "2020 - 2026",
    description:
      "Focused on software development, embedded systems, artificial intelligence, and IoT technologies. Experienced in developing automation and hardware-software integration projects through academic research and practical implementations.",
  },
  {
    title: "Artificial Intelligence",
    institution: "Startup Campus",
    period: "August 2023 - December 2023",
    description:
      "Participated in the Artificial Intelligence program at Startup Campus from August 2023 to December 2023. This program focused on deepening knowledge and skills in AI, including machine learning, data analysis, and AI model development. Actively engaged in innovative projects, working on real-world case studies, and collaborating in teams to create AI-based solutions tailored to industry needs. This experience enhanced my understanding of AI applications in modern technology and strengthened my ability to apply AI techniques to solve complex problems.",
  },
  {
    title: "Hardware Engineering",
    institution: "PT. Stechoq Robotika Indonesia",
    period: "February 2023 - June 2023",
    description:
      "Studied Hardware Engineering at PT. Stechoq Robotika Indonesia from February 2023 to June 2023. Focused on learning the design, development, and testing of hardware components for robotic systems, embedded devices, and IoT applications. Gained hands-on experience in PCB design, circuit analysis, and prototyping, contributing to innovative robotic solutions. Collaborated with multidisciplinary teams to understand the integration of hardware with software, ensuring system functionality and performance. This experience enhanced my knowledge in hardware engineering, problem-solving, and the practical application of engineering principles in real-world scenarios.",
  },
];

const experienceData = [
  {
    title: "Teaching Assistant",
    company: "Bachelor of Informatics Engineering Program, Tadulako University",
    period: "February 2021 - June 2023",
    description:
      "Supported lecturers in preparing course materials, assignments, and examinations while providing academic guidance and tutoring sessions for students in practical and programming-related subjects.",
  },
  {
    title: "Teaching Assistant",
    company: "Bachelor of Nursing Program, Widya Nusantara University",
    period: "November 2024 - December 2024",
    description:
      "Managed practicum materials and assisted students in understanding Information Technology concepts and practical assignments.",
  },
  {
    title: "Chairperson",
    company: "Animedia Tadulako",
    period: "September 2024 - April 2025",
    description:
      "Led and managed organizational operations, coordinated work programs and events, maintained member productivity, and established strong relationships with external partners and communities.",
  },
  {
    title: "IT Staff",
    company: "Environmental Agency of Palu City",
    period: "April 2025 - May 2025",
    description:
      "Developed a web-based Asset Inventory and Management Portal to improve data management efficiency and support digital administration processes.",
  },
];

const Qualification = () => {
  return (
    <div>
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Quality
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Education & Experience
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                {educationData.map((edu, index) => (
                  <div className="position-relative mb-4" key={index}>
                    <i
                      className="far fa-dot-circle text-primary position-absolute"
                      style={{ top: "2px", left: "-32px" }}
                    ></i>
                    <h5 className="font-weight-bold mb-1">{edu.title}</h5>
                    <p className="mb-2">
                      <strong>{edu.institution}</strong> |{" "}
                      <small>{edu.period}</small>
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
                    <i
                      className="far fa-dot-circle text-primary position-absolute"
                      style={{ top: "2px", left: "-32px" }}
                    ></i>
                    <h5 className="font-weight-bold mb-1">{exp.title}</h5>
                    <p className="mb-2">
                      <strong>{exp.company}</strong> |{" "}
                      <small>{exp.period}</small>
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
