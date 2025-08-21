import React from "react";

function Projects() {
  const sectionStyle = {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.2rem",
    marginBottom: "40px",
    color: "#333",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const titleStyle = {
    fontSize: "1.4rem",
    marginBottom: "10px",
    color: "#007BFF",
  };

  const descStyle = {
    fontSize: "1rem",
    marginBottom: "15px",
    color: "#555",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    background: "#007BFF",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}> Projects</h2>
      <div style={gridStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, cardHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, cardStyle)
          }
        >
          <h3 style={titleStyle}>Online Student Management System</h3>
          <p style={descStyle}>
           Developed a responsive CRUD application with localStorage persistence for managing student records.  </p>
          <a
            href="https://github.com/sugapriya6/student_management.git"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            View Project
          </a>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, cardHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, cardStyle)
          }
        >
          <h3 style={titleStyle}>Pinterest Clone</h3>
          <p style={descStyle}>
           Built a responsive image-sharing platform with filtering, infinite scroll, and pinned image persistence using localStorage.   </p>
          <a
            href="https://github.com/sugapriya6/pinterest.git"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            View Project
          </a>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, cardHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, cardStyle)
          }
        >
          <h3 style={titleStyle}>Product Review System</h3>
          <p style={descStyle}>
            Created a star-rated product review system with real-time average ratings using PHP-MySQL integration.   </p>
          <a
            href="https://github.com/sugapriya6/product_review.git"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
