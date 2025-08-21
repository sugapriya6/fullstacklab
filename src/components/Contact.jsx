import React from "react";

function Contact() {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "50px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#222",
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "450px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s",
  };

  const inputFocus = {
    borderColor: "#007BFF",
    boxShadow: "0 0 5px rgba(0,123,255,0.5)",
  };

  const buttonStyle = {
    padding: "12px",
    background: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "0.3s",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <form style={formStyle}>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocus })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocus })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocus })}
          onBlur={(e) => (e.target.style = inputStyle)}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
