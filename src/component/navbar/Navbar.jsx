import { useState, useEffect } from "react";
import "./navbar.css"; 
import { IMAGES } from "../../constants/Images";
import Button from "../button/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <div className="logo">
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={IMAGES.LOGO} alt="logo" />
          </a>
        </div>
        <label className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </label>
        <ul className={`menu ${isMenuOpen ? "open" : ""} ${isScrolled ? "scrolled-menu" : ""}`}>
          <li><a href="#landing">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="menu-button">
            <Button
              title="Get Quotes"
              styles={{
                backgroundColor: "#0765de",
                color: "white",
                fontSize: '20px',
                fontFamily: 'sans',
                padding: "10px 15px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                borderRadius: "25px",
                width: "150px",
                border: "none",
                justifyContent: "center",
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
