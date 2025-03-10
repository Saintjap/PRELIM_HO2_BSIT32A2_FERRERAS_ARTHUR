import React from "react";
import "./styles.css"; // Make sure to include updated styles

function CV() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Navbar Section */}
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Arthur Ferreras</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My CV</h1>
          <p>
            Hi, I'm <strong>Arthur Ferreras</strong>, a 3rd-year college.
          </p>
          <button
            className="hero-button"
            onClick={() =>
              alert(
                "My Hobbies:\n- Coding\n- Playing Chess\n- Reading Books\n- Watching Anime"
              )
            }
          >
            Hobbies
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am an enthusiastic student who enjoys science, coding, and
            participating in school clubs.
          </p>
          <h3>Education</h3>
          <ul>
            <li>Elementary - Cupang Elemenatary School</li>
            <li>Senior High School - Tunasan Highschool</li>
            <li>Senior High School - Lyceum Of Alabang</li>
            <li>College - Lyceum of Alabang</li>
          </ul>
          <h3>Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Python Programming</li>
            <li>Public Speaking</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Arthur Ferreras. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default CV;
