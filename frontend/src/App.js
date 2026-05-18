import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [message, setMessage] = useState('Loading backend...');
      useEffect(() => {
    axios
      .get('https://portfolio-backend-cbt7.onrender.com/api/profile')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage('Backend connection failed');
      });
  }, []);
  return (
    <div className="container">

      <header className="hero">
        <h1>Kichere Magubu</h1>

        <p>
          Data Analyst | Reporting & Insights Professional
        </p>
      </header>

      <section>
        <h2>About Me</h2>

        <p>
          Data Analyst with experience in reporting automation,
          KPI tracking, dashboards, Python, SQL, Power BI,
          cloud technologies, and insight generation.
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <ul>
          <li>Python</li>
          <li>SQL</li>
          <li>Power BI</li>
          <li>Excel</li>
          <li>Flask</li>
          <li>Cloud Computing</li>
          <li>Reporting Automation</li>
          <li>Dashboard Development</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>

        <div className="card">
          <h3>M-Pesa Insights & Reporting Analyst</h3>
          <p>Vodacom Tanzania Plc</p>
        </div>

        <div className="card">
          <h3>Instructor at Udemy</h3>
          <p>Data Science & Analytics</p>
        </div>

        <div className="card">
          <h3>Data Analytics Intern</h3>
          <p>SKT Tanzania Ltd</p>
        </div>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>Healthcare Reports & Data Entry System</h3>

          <p>
            End-to-end healthcare analytics system with dashboards,
            reporting automation, KPI tracking, and guided data entry.
          </p>

          <a
            href="https://reportshub.datanutrients.com/"
            target="_blank"
            rel="noreferrer"
          >
            View Reports System
          </a>
        </div>
      </section>

            <section>
        <h2>Backend API Status</h2>

        <p>{message}</p>
      </section>

      <section>
        <h2>Contact</h2>

        <p>Email: kicherethedatascientist@gmail.com</p>
        <p>Phone: +255654729851</p>
      </section>

    </div>
  );
}

export default App;