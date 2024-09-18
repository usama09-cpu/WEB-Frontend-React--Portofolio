const services = [
  {
    icon: 'fa-microchip',
    title: 'PCB Design',
    description: 'High-quality PCB design tailored to meet your specific project requirements. We focus on delivering optimized, reliable, and cost-effective designs, ensuring efficient circuit functionality from planning to final implementation.'
  },
  {
      icon: 'fa-cogs',
      title: 'Electronic Schematic Design',
      description: 'Precise and industry-standard electronic schematic design for optimal performance. We ensure stable device functionality with attention to detail and reliable components integration.'
  },
  {
      icon: 'fa-cloud',
      title: 'Internet of Things (IoT)',
      description: 'Comprehensive IoT solutions, from concept to deployment. We specialize in creating connected systems, integrating hardware and software for seamless communication and smart network operations.'
  },
  {
      icon: 'fa-microchip',
      title: 'Embedded Systems',
      description: 'Developing high-performance embedded systems for automation, control, and energy efficiency. Our solutions are designed to maximize performance and reliability, tailored to specific industry needs.'
  },
  {
      icon: 'fa-robot',
      title: 'Robotics',
      description: 'Advanced robotics solutions for industrial and research applications. We design and build intelligent robotic systems with sensor integration, actuators, and precise control algorithms for automated operations.'
  },
  {
      icon: 'fa-pencil-ruler',
      title: 'UI/UX Design',
      description: 'Creating visually appealing and user-friendly interfaces for websites and apps. We focus on delivering seamless user experiences across all devices, ensuring your users stay engaged and satisfied.'
  },
  {
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Custom web development solutions using the latest technologies to deliver dynamic, responsive, and scalable websites. We prioritize performance, security, and user-friendliness to ensure your online presence stands out.'
  },
  {
      icon: 'fa-brain',
      title: 'Machine Learning & Deep Learning',
      description: 'Implementing state-of-the-art machine learning and deep learning models to automate processes, extract insights, and drive intelligent decision-making. Our solutions are designed for accuracy and efficiency in handling large datasets.'
  },
  {
    icon: 'fa-paint-brush',
    title: 'Deign & Multimedia',
    description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita'
  },
];

const Services = () => {
  return (
    <div>
      <div className="container-fluid pt-5" id="service">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
              Service
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
          </div>
          <div className="row pb-3">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6 text-center mb-5" key={index}>
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <i className={`fa fa-2x ${service.icon} service-icon bg-primary text-white mr-3`}></i>
                  <h4 className="font-weight-bold m-0">{service.title}</h4>
                </div>
                <p>{service.description}</p>
                <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
