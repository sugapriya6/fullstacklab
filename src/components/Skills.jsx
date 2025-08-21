import React from "react";

function Skills() {
  const certificates = [
    {
      title: "Full-Stack Web Development – Coursera",
      link: "https://example.com/certificate1"
    },
    {
      title: "Python for Data Science – IBM",
      link: "https://example.com/certificate2"
    },
    {
      title: "React.js Advanced Concepts – Udemy",
      link: "https://example.com/certificate3"
    }
  ];

  // Same theme as Home & About
  const sectionStyle = {
    minHeight: "100vh",
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Purple → Blue
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "40px",
    fontWeight: "bold"
  };

  const skillsListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    listStyle: "none",
    padding: 0,
    maxWidth: "900px",
    width: "100%"
  };

  const skillItemStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "12px",
    fontSize: "1.2rem",
    fontWeight: "500",
    backdropFilter: "blur(6px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  const certSectionStyle = {
    marginTop: "60px",
    width: "100%",
    maxWidth: "700px"
  };

  const certItemStyle = {
    background: "rgba(255, 255, 255, 0.15)",
    padding: "20px",
    margin: "15px auto",
    borderRadius: "10px",
    fontSize: "1.1rem",
    backdropFilter: "blur(6px)",
    color: "#fff",
    transition: "transform 0.3s ease"
  };

  const buttonStyle = {
    marginTop: "12px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#fff",
    color: "#2575fc",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease"
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={headingStyle}>⚡ Skills & Certificates</h2>

      {/* Skills List */}
      <ul style={skillsListStyle}>
        <li style={skillItemStyle}>HTML, CSS, JavaScript</li>
        <li style={skillItemStyle}>Java</li>
        <li style={skillItemStyle}>React.js</li>
        <li style={skillItemStyle}>Python</li>
        <li style={skillItemStyle}>MySQL</li>
      </ul>

      {/* Certificates Section */}
      <div style={certSectionStyle}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📜 Certificates</h2>
        {certificates.map((cert, index) => (
          <div key={index} style={certItemStyle}>
            <p>{cert.title}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button style={buttonStyle}>View Certificate</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
