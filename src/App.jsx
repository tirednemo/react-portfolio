import { useState } from "react";
import Home from "./Home";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <nav>
          <a href="['/']">
            <img
              src="https://img.icons8.com/neon/48/user-female-circle.png"
              alt="user-female-circle"
            />
          </a>
          <h1 className="font-extrabold text-2xl animate__animated animate__jackInTheBox">
            Umme Tasnim Hasan
          </h1>

          <ul className="navigation">
            <li>
              <a href="#about" className="nav-link" onClick={()=>toggleMenu()}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={()=>toggleMenu()}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={()=>toggleMenu()}>
                Projects
              </a>
            </li>
            <li>
              <a href="#history" className="nav-link" onClick={()=>toggleMenu()}>
                Timeline
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={()=>toggleMenu()}>
                Contact
              </a>
            </li>
          </ul>

          <button className="burger-menu" id="burger-menu" onClick={()=>toggleMenu()}>
            <img src="https://img.icons8.com/neon/96/menu.png" />
          </button>
        </nav>
      </header>

      <section>
        <Home></Home>
        <i className="scroll-up" id="scroll-up">
          <img
            src="https://img.icons8.com/neon/96/double-up.png"
            alt="up"
            className="up-arrow"
            onClick={()=> scrollUp()}
          />
        </i>
      </section>

      <footer>
        <p className="copy">&copy; Copyright 2023</p>
      </footer>
    </>
  );
}

export default App;
