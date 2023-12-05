import React, { useState, useEffect } from "react";
import StackService from "./StackService";

import "./Skill.css";

const Skill = ({ skillCategory, onClosePopup }) => {
  const [stackList, setStackList] = useState([]);

  useEffect(() => {
    setStackList(StackService.getStackByCategory(skillCategory));
  }, [skillCategory]);


  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClosePopup}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/neon/96/close-window.png"
            alt="close-window"
          />
        </button>

        <h2 className="skill-header">{skillCategory}</h2>

        <div className="skill-set-wrapper">
          {stackList.map((i) => (
            <div className="skill-set" key={i.name}>
              <img
                width="48"
                height="48"
                src={i.logoUrl}
                alt="web-design"
                loading="lazy"
              />
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
