import { useState } from 'react';

const portfolioItems = [
  { src: './public/assets/img/Portofolio/Monitoring_gates.png', category: ['IoT', 'Web'], title: 'monitoring and controlling irrigation gates', description: 'This project was created at the request of a client who used our services.', type: 'Team', link: 'https://github.com/usama09-cpu/WEB-Monitoring_dan_Kontrol_Gerbang.git' },
  { src: './public/assets/img/Portofolio/pcb_deffect.jpeg', category: ['DL'], title: 'EUFORIA - PCB DEffect', description: 'This project was created to fulfill the final project requirements for graduating from MSIB5 Startup Campus - Artificial Intelligence.', type: 'Team', link: 'https://github.com/usama09-cpu/Euforia.git' },
  { src: './public/assets/img/Portofolio/patient_monitor.png', category: ['IoT'], title: 'Mp4 hd - Patient monitor', description: 'This project was created to fulfill the final project requirements for MSIB6 Stechoq - Hardware Engineering graduation.', type: 'Team', link: 'https://github.com/usama09-cpu/IOT-MP4HD-Patient_Monitor.git' },
  { src: './public/assets/img/Portofolio/web_pramuka.png', category: ['Web'], title: 'Landing page - pramuka smansa poso', description: 'This project was created as a gift for the Poso SMANSA scouts.', type: 'Individual', link: 'https://github.com/usama09-cpu/WEB-Frontend-React--pramuka_smansa_poso.git' },
];

const Portofolio = () => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Mengambil kategori dan tipe unik dari item portofolio
  const categories = Array.from(new Set(portfolioItems.flatMap(item => item.category)));
  const types = Array.from(new Set(portfolioItems.map(item => item.type)));

  const handleCategoryFilterClick = (category) => {
    setCategoryFilters(prevFilters =>
      prevFilters.includes(category)
        ? prevFilters.filter(c => c !== category)
        : [...prevFilters, category]
    );
  };

  const handleTypeFilterClick = (type) => {
    setTypeFilters(prevFilters =>
      prevFilters.includes(type)
        ? prevFilters.filter(t => t !== type)
        : [...prevFilters, type]
    );
  };

  const handleImageClick = (item) => {
    setSelectedProject(item);
  };

  // Memfilter item berdasarkan kategori dan tipe yang dipilih
  const filteredItems = portfolioItems.filter(item =>
    (categoryFilters.length === 0 || item.category.some(c => categoryFilters.includes(c))) &&
    (typeFilters.length === 0 || typeFilters.includes(item.type))
  );

  return (
    <div>
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
              Gallery
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li
                  className={`btn btn-sm btn-outline-primary m-1 ${categoryFilters.length === 0 ? 'active' : ''}`}
                  onClick={() => setCategoryFilters([])}
                >
                  All Categories
                </li>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`btn btn-sm btn-outline-primary m-1 ${categoryFilters.includes(category) ? 'active' : ''}`}
                    onClick={() => handleCategoryFilterClick(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </li>
                ))}
              </ul>
              <ul className="list-inline mb-4" id="portfolio-type-flters">
                <li
                  className={`btn btn-sm btn-outline-primary m-1 ${typeFilters.length === 0 ? 'active' : ''}`}
                  onClick={() => setTypeFilters([])}
                >
                  All Types
                </li>
                {types.map((type) => (
                  <li
                    key={type}
                    className={`btn btn-sm btn-outline-primary m-1 ${typeFilters.includes(type) ? 'active' : ''}`}
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
                className={`col-lg-4 col-md-6 mb-4 portfolio-item ${item.category.join(' ')}`}
                key={index}
              >
                <div className="position-relative overflow-hidden mb-2" onClick={() => handleImageClick(item)}>
                  <img className="img-fluid rounded w-100 h-auto object-cover aspect-w-16 aspect-h-9 portfolio-img" src={item.src} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
          {selectedProject && (
            <>
              <div className="modal-overlay" onClick={() => setSelectedProject(null)}></div>
              <div className="modal show" style={{ display: 'block' }} onClick={() => setSelectedProject(null)}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{selectedProject.title}</h5>
                      <button type="button" className="btn-close" onClick={() => setSelectedProject(null)}></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid w-100 rounded mb-3" src={selectedProject.src} alt={selectedProject.title} />
                      <p>{selectedProject.description}</p>
                      <p><strong>Type :</strong> {selectedProject.type}</p>
                      <p><strong>Link :</strong> <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">{selectedProject.link}</a></p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setSelectedProject(null)}>Close</button>
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