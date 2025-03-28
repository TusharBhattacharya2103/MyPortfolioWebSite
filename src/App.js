import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Background Animation */}
      <div className="animated-background"></div>

      {/* Glass Effect Container */}
      <div className="glass-container fade-in">
        <header>
          <h1 className="name">Tushar Bhattacharya</h1>
          <p className="contact-info">
            📧 <a href="mailto:tusharbhattacharya2022@gmail.com">tusharbhattacharya2022@gmail.com</a>
          </p>
          <p className="contact-info">📞 +91 6264885983</p>
          <p className="links">
            <a href="https://www.linkedin.com/in/tushar-bhattacharya-ab287a267/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://github.com/TusharBhattacharya2103" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </header>

        {/* Education Section */}
        <section className="section fade-in">
          <h2>🎓 Education</h2>
          <p><strong>KIIT University, Bhubaneswar</strong> (Aug 2022 - June 2026)</p>
          <p>B.Tech. in Computer Science and Engineering | CGPA: 7.05/10</p>
          <p><strong>Relevant Coursework:</strong> DSA, OOP, AI, Databases, OS, Computer Networks</p>
        </section>

        {/* Experience Section */}
        <section className="section fade-in">
          <h2>💼 Experience</h2>
          <p><strong>Full Stack Web Development Intern</strong> (July 2024 - Sept 2024)</p>
          <ul>
            <li>Developed 5+ responsive web applications using React, Django, and Golang.</li>
            <li>Optimized website performance, reducing load times by 30%.</li>
            <li>Deployed applications on AWS EC2 and managed version control with GitHub.</li>
          </ul>
        </section>

        {/* Technical Skills Section */}
        <section className="section fade-in">
          <h2>💻 Technical Skills</h2>
          <ul>
            <li><strong>Languages:</strong> C/C++, Java, Python, JavaScript, Golang</li>
            <li><strong>Frameworks:</strong> React.js, Django, Laravel</li>
            <li><strong>Cloud & Databases:</strong> AWS (EC2, S3, RDS), Oracle SQL</li>
            <li><strong>Tools:</strong> Git, GitHub, Postman</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="section fade-in">
          <h2>🚀 Projects</h2>
          <div className="card-hover">
            <h3><a href="https://github.com/TusharBhattacharya2103/Spotify-Clone-Final" target="_blank" rel="noopener noreferrer">Spotify Clone</a></h3>
            <p>Developed a full-stack music streaming platform with a modern UI, RESTful APIs, and offline downloads.</p>
          </div>
          <div className="card-hover">
            <h3>Tic-Tac-Toe Game</h3>
            <p>Built an interactive browser-based Tic-Tac-Toe game using HTML, CSS, and JavaScript.</p>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="section fade-in">
          <h2>🌍 Extracurricular Engagements</h2>
          <p><strong>Little Paws Care (NGO):</strong> Organized food drives for 100+ street dogs.</p>
          <p><strong>Youth Red Cross – KIIT:</strong> Led awareness campaigns & blood donation drives.</p>
        </section>

        {/* Awards & Certifications */}
        <section className="section fade-in">
          <h2>🏆 Awards & Certifications</h2>
          <ul>
            <li><a href="#">AWS Cloud Foundation Course</a> - AWS Academy</li>
            <li><a href="#">AWS Cloud Architecture Course</a> - AWS Academy</li>
            <li><a href="#">Cloud Virtual Internship</a> - AWS Academy</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>Made with ❤️ by Tushar Bhattacharya</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
