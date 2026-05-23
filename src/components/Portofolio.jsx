import { useState } from "react";

const portfolioItems = [
  {
    src: "./assets/img/Portofolio/Monitoring_gates.png",
    category: ["IoT", "WEB"],
    title: "IoT-Based Irrigation Gate Monitoring and Control System",
    description:
      "This project was developed based on client requirements to monitor and control irrigation gates through a web-based IoT system for real-time monitoring and operational management.",
    type: "Team",
    link: "https://github.com/usama09-cpu/WEB-Monitoring_dan_Kontrol_Gerbang.git",
  },

  {
    src: "./assets/img/Portofolio/pcb_deffect.jpeg",
    category: ["AI", "COMPUTER VISION"],
    title: "PCB Defect Detection System",
    description:
      "This project was developed as the final project for the MSIB5 Startup Campus Artificial Intelligence program, focusing on AI-based PCB defect detection using deep learning and computer vision technologies.",
    type: "Team",
    link: "https://github.com/usama09-cpu/Euforia.git",
  },

  {
    src: "./assets/img/Portofolio/patient_monitor.png",
    category: ["IoT", "EMBEDDED"],
    title: "IoT-Based Patient Monitoring System",
    description:
      "This project was developed to fulfill the final project requirements for the MSIB6 Stechoq Hardware Engineering program, focusing on real-time patient monitoring using IoT and embedded system technologies.",
    type: "Team",
    link: "https://github.com/usama09-cpu/IOT-MP4HD-Patient_Monitor.git",
  },

  {
    src: "./assets/img/Portofolio/web_pramuka.png",
    category: ["WEB", "FRONTEND"],
    title: "Scout Organization Landing Page Website",
    description:
      "This project was developed as a landing page website for the SMANSA Poso scout organization to provide organizational information and improve digital presence.",
    type: "Individual",
    link: "https://github.com/usama09-cpu/WEB-Frontend-React--pramuka_smansa_poso.git",
  },

  {
    src: "./assets/img/Portofolio/Monitoring_tumbuhan.png",
    category: ["IoT", "AI"],
    title: "IoT-Based Plant Monitoring System",
    description:
      "This project was developed based on client requirements for plant monitoring and analysis using IoT technology to support efficient data collection and environmental monitoring processes.",
    type: "Individual",
    link: "https://github.com/usama09-cpu/IOT-Monitoring_Tumbuhan.git",
  },

  {
    src: "./assets/img/Portofolio/Mobile-monitoring(S,K,P,A,L).png",
    category: ["MOBILE", "IoT"],
    title: "Mobile Monitoring and Control Application",
    description:
      "This mobile application was developed using React Native to monitor and control environmental parameters such as temperature, humidity, soil pH, water quality, and lighting systems in real-time.",
    type: "Individual",
    link: "https://github.com/usama09-cpu/Mobile-React_Native-Monitoring-Controlig-Suhu-Kelembaban-PHTanah-Lampu-Air.git",
  },

  {
    src: "./assets/img/Portofolio/AsetDLHPalu.png",
    category: ["WEB", "API", "FULLSTACK"],
    title:
      "Asset Inventory and Management Portal for Palu City Environmental Department",
    description:
      "This portal was developed to support digital asset management at the Palu City Environmental Department, improving transparency, efficiency, and administrative management through a web-based system.",
    type: "Team",
    link: "https://github.com/usama09-cpu/WEB-Pendataan_Aset_DLH_Kota_Palu.git",
  },

  {
    src: "./assets/img/Portofolio/TA.jpeg",
    category: ["AI", "COMPUTER VISION", "EMBEDDED"],
    title: "AI-Based Automated Paint Can Defect Detection and Sorting System",
    description:
      "This project was developed as a final project focused on integrating YOLOv12, multi-camera computer vision, embedded systems, and conveyor automation for real-time paint can defect detection and automatic sorting.",
    type: "Final Project",
    link: "https://github.com/usama09-cpu",
  },
];

const Portofolio = () => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = Array.from(
    new Set(portfolioItems.flatMap((item) => item.category)),
  );
  const types = Array.from(new Set(portfolioItems.map((item) => item.type)));

  const handleCategoryFilterClick = (category) => {
    if (category === "All Categories") {
      // Jika tombol "All Categories" diklik, reset filter
      setCategoryFilters([]);
    } else {
      setCategoryFilters((prevFilters) => {
        const updatedFilters = prevFilters.includes(category)
          ? prevFilters.filter((c) => c !== category)
          : [...prevFilters, category];

        if (updatedFilters.length === categories.length) {
          return [];
        }

        return updatedFilters;
      });
    }
  };

  const handleTypeFilterClick = (type) => {
    if (type === "All Types") {
      // Jika tombol "All Types" diklik, reset filter
      setTypeFilters([]);
    } else {
      setTypeFilters((prevFilters) => {
        const updatedFilters = prevFilters.includes(type)
          ? prevFilters.filter((t) => t !== type)
          : [...prevFilters, type];

        if (updatedFilters.length === types.length) {
          return [];
        }
        return updatedFilters;
      });
    }
  };

  const handleImageClick = (item) => {
    setSelectedProject(item);
  };

  const filteredItems = portfolioItems.filter(
    (item) =>
      (categoryFilters.length === 0 ||
        item.category.some((c) => categoryFilters.includes(c))) &&
      (typeFilters.length === 0 || typeFilters.includes(item.type)),
  );

  return (
    <div>
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Gallery
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Portfolio
            </h1>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li
                  className={`btn btn-sm btn-outline-primary m-1 ${
                    categoryFilters.length === 0 ? "active" : ""
                  }`}
                  onClick={() => handleCategoryFilterClick("All Categories")}
                >
                  All Categories
                </li>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`btn btn-sm btn-outline-primary m-1 ${
                      categoryFilters.includes(category) ? "active" : ""
                    }`}
                    onClick={() => handleCategoryFilterClick(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </li>
                ))}
              </ul>
              <ul className="list-inline mb-4" id="portfolio-type-flters">
                <li
                  className={`btn btn-sm btn-outline-primary m-1 ${
                    typeFilters.length === 0 ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilterClick("All Types")}
                >
                  All Types
                </li>
                {types.map((type) => (
                  <li
                    key={type}
                    className={`btn btn-sm btn-outline-primary m-1 ${
                      typeFilters.includes(type) ? "active" : ""
                    }`}
                    onClick={() => handleTypeFilterClick(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {filteredItems.map((item, index) => (
              <div
                className={`col-lg-4 col-md-6 mb-4 portfolio-item ${item.category.join(
                  " ",
                )}`}
                key={index}
              >
                <div
                  className="position-relative overflow-hidden mb-2"
                  onClick={() => handleImageClick(item)}
                >
                  <img
                    className="img-fluid rounded w-100 h-auto object-cover aspect-w-16 aspect-h-9 portfolio-img"
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
          {selectedProject && (
            <>
              <div
                className="modal-overlay"
                onClick={() => setSelectedProject(null)}
              ></div>
              <div className="modal show" style={{ display: "block" }}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header flex align-items-center">
                      <h5 className="modal-title">{selectedProject.title}</h5>
                      <button
                        type="button"
                        className="btn-close bg-primary border-primary w-[20px]"
                        onClick={() => setSelectedProject(null)}
                      ></button>
                    </div>
                    <div className="bodymodal modal-body">
                      <img
                        className="img-fluid w-100 rounded mb-3"
                        src={selectedProject.src}
                        alt={selectedProject.title}
                      />
                      <p className="text-justify">
                        {selectedProject.description}
                      </p>
                      <p>
                        <strong>Type :</strong> {selectedProject.type}
                      </p>
                      <p>
                        <strong>Link :</strong>{" "}
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* {selectedProject.link} */}
                          Click Here
                        </a>
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
