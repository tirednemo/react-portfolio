import React from "react";

import "./Timeline.css";

const Timeline = () => {
  return (
    <ul>
      <li className="timeline-item">
        <div className="timeline-badge">
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/neon/96/company.png"
            alt="company"
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Software Development Intern</h4>
            <p>
              <small className="text-muted">RedDot Digital Ltd.</small>
            </p>
          </div>
          <div className="timeline-body">
            <p>
              PHP · BPMN · PHP Frameworks · Object-Relational Mapping (ORM) ·
              Tailwind CSS · Laravel · OAuth · Design Patterns
            </p>
          </div>
        </div>
        <div className="timeline-date">
          <h4 className="timeline-title">May 2023 - September 2023</h4>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-badge">
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/neon/96/graduation-cap.png"
            alt="graduation-cap"
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Undergraduate</h4>
            <p>
              <small className="text-muted">Islamic University of Technology</small>
            </p>
          </div>
          <div className="timeline-body">
            <ul>
              <li>OOP · DSA · Systems Programming</li>
              <li>DBMS · OS · Design Principles · Distributed Systems</li>
              <li>Machine Learning · AI</li>
            </ul>
          </div>
        </div>
        <div className="timeline-date">
          <h4 className="timeline-title">Jan 2020 - June 2024</h4>
        </div>
      </li>
      <li className="timeline-item">
        <div className="timeline-badge">
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/neon/96/graduation-cap.png"
            alt="graduation-cap"
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">Higher Secondary</h4>
            <p>
              <small className="text-muted">Chittagong College</small>
            </p>
          </div>
        </div>
        <div className="timeline-date">
          <h4 className="timeline-title">July 2017 - May 2019</h4>
        </div>
      </li>
    </ul>
  );
};

export default Timeline;
