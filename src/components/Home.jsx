import React from "react";

function Home() {
  // Section container
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // same as About page
    minHeight: "100vh",
    flexWrap: "wrap",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  // Left text area
  const textStyle = {
    flex: 1,
    maxWidth: "600px",
    marginRight: "40px",
    textAlign: "left",
  };

  const headingStyle = {
    fontSize: "30px",
    color: "#ffdd57",
    marginBottom: "10px",
  };

  const nameStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ffdd57)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#f1f1f1",
    marginBottom: "20px",
  };

  const quoteStyle = {
    fontStyle: "italic",
    color: "#ddd",
    fontSize: "16px",
    borderLeft: "4px solid #ffdd57",
    paddingLeft: "12px",
    marginBottom: "20px",
  };

  // Right image
  const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0px 6px 25px rgba(0,0,0,0.4)",
    border: "5px solid #ffdd57",
    transition: "transform 0.3s ease",
  };

  return (
    <section id="home" style={sectionStyle}>
      {/* Left Content */}
      <div style={textStyle}>
        <h2 style={headingStyle}> Welcome!</h2>
        <h1>
          I'm <span style={nameStyle}>Sugapriya S</span>
        </h1>
        <p style={paragraphStyle}>
         A passionate Frontend Developer skilled at crafting modern, responsive, and user-friendly web interfaces. I love turning ideas into reality through clean design, interactive features, and continuous learning.
        </p>
       
      </div>

      {/* Right Profile Image */}
      <div style={rightStyle}>
        <img
          src="https://media.istockphoto.com/id/870048294/vector/business-woman-avatar-portrait-icon-image.jpg?s=170667a&w=0&k=20&c=N0E8698Ymnx1M9YXiKNAH1YGqaYYLBP84_pTjOTVCfw="
          alt="Profile"
          style={imgStyle}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>
    </section>
  );
}

export default Home;
