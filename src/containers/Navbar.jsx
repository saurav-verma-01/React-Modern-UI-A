import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "../components/Button";
import { navLinks } from "../constants";

import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo-containe">
          <img src={logo} alt="gpt3 Logo" className="logo" width={96} />
        </div>

        <nav className="nav">
          {navLinks.map((item) => (
            <a key={item.id} href={item.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="special-btn">
          <Button>Get Started</Button>
        </div>

        <div className="nav-toggle-btn">
          <div className="icon-btn" onClick={() => setShowNav((prev) => !prev)}>
            {showNav ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </div>
        </div>

        {showNav && (
          <nav className="mobile-nav-menu">
            {navLinks.map((item) => (
              <a
                href={item.link}
                key={item.id}
                onClick={() => setShowNav(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="special-btn">
              <Button onClick={() => setShowNav(false)}>Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
