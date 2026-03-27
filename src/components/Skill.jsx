const skills = [
  // 🎨 Multimedia & Design
  { name: "Figma" },
  { name: "Adobe Illustrator" },
  { name: "CorelDRAW" },
  { name: "Adobe Photoshop" },
  { name: "After Effects" },

  // 💻 Software Development (Web & Programming)
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "React Native" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MySQL" },

  // 🧠 AI & Data
  { name: "Python" },
  { name: "PyTorch" },
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "Computer Vision" },

  // 🤖 Embedded Systems & IoT
  { name: "C/C++" },
  { name: "Arduino" },
  { name: "ESP32/ESP8266" },
  { name: "LoRa" },
  { name: "PLC" },
  { name: "SCADA" },
  { name: "RFID" },
  { name: "Node-RED" },
  { name: "Blynk" },
  { name: "ThingsBoard" },
  { name: "ThingSpeak" },

  // 🛠️ Hardware & Simulation Tools
  { name: "Fritzing" },
  { name: "Proteus" },
  { name: "EasyEDA" },
  { name: "Wokwi" },
];

const Skill = () => {
  const radius = 22; // besar pola
  const textOffset = 2; // jarak teks dengan lingkaran

  return (
    <div>
      <div className="container-fluid py-5" id="skill">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Skills
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Skills
            </h1>
          </div>

          <div className="text-center">
            <div
              className="position-relative"
              style={{ width: "100%", height: "100%" }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                style={{ padding: "10px" }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#00b894", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#00b894", stopOpacity: 0 }}
                    />
                  </linearGradient>
                </defs>

                <circle cx="50" cy="50" r="2" fill="black" />

                {skills.map((skill, index) => {
                  const angle = (360 / skills.length) * index;
                  const x = 50 + radius * Math.cos(angle * (Math.PI / 180));
                  const y = 50 + radius * Math.sin(angle * (Math.PI / 180));
                  const textRadius = radius + textOffset;

                  const textX =
                    50 + textRadius * Math.cos(angle * (Math.PI / 180));
                  const textY =
                    50 + textRadius * Math.sin(angle * (Math.PI / 180));
                  const rotateText =
                    angle > 90 && angle < 270 ? angle + 180 : angle;
                  const textAnchor =
                    angle > 90 && angle < 270 ? "end" : "start";

                  return (
                    <g key={index}>
                      {skills.slice(index + 1).map((_, nextIndex) => {
                        const nextAngle =
                          (360 / skills.length) * (index + 1 + nextIndex);
                        const nextX =
                          50 + radius * Math.cos(nextAngle * (Math.PI / 180));
                        const nextY =
                          50 + radius * Math.sin(nextAngle * (Math.PI / 180));
                        return (
                          <line
                            key={nextIndex}
                            x1={`${x}%`}
                            y1={`${y}%`}
                            x2={`${nextX}%`}
                            y2={`${nextY}%`}
                            stroke="url(#gradient)"
                            strokeWidth="0.2"
                            style={{
                              animation: "gradientAnimation 3s linear infinite",
                            }}
                          />
                        );
                      })}

                      <circle
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="0.5"
                        fill="#00b894"
                      />

                      <text
                        x={`${textX}%`}
                        y={`${textY}%`}
                        fill="black"
                        textAnchor={textAnchor}
                        alignmentBaseline="middle"
                        fontSize="2.1"
                        dy="0em"
                        transform={`rotate(${rotateText}, ${textX}, ${textY})`} // Rotate text dynamically
                      >
                        {skill.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
