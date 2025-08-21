import React from "react";

function About() {
  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto 30px",
    lineHeight: "1.8",
  };

  const linkStyle = {
    display: "inline-block",
    margin: "0 15px",
    fontSize: "1.1rem",
    color: "white",
    textDecoration: "none",
    border: "1px solid white",
    padding: "10px 20px",
    borderRadius: "25px",
    transition: "0.3s",
  };

  const hoverStyle = {
    background: "white",
    color: "#764ba2",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={textStyle}>
        I am a passionate Frontend Developer skilled in creating responsive, user-friendly, and visually appealing websites. I enjoy transforming ideas into interactive interfaces, learning modern frameworks, and enhancing user experiences. My expertise includes React.js, JavaScript, HTML, and CSS, with a strong focus on performance, accessibility, and clean design. I am eager to work on innovative projects and contribute to impactful digital solutions.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/sugapriya06"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sugapriya6"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
        >
          GitHub
        </a>
        <a
          href="mailto:suga.71772218151@gct.ac.in"
          style={linkStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default About;
