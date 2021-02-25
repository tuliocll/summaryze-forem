import { useState } from "react";
import Image from "next/image";
import style from "./Nav.module.css";
import { FiMenu } from "react-icons/fi";
import Logo from "../Logo";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={`${style.navbar} ${showMenu ? style.responsive : ""}`}>
      <Logo nav />
      <a
        href="https://github.com/tuliocll/summaryze-dev#about-it"
        target="_blank"
      >
        About
      </a>
      <a href="https://github.com/tuliocll/summaryze-dev" target="_blank">
        Github
      </a>
      <a href="#how-to-use-it">How to use</a>
      <a href="#" className={style.menu} onClick={toggleMenu}>
        <FiMenu color="#111" />
      </a>
    </nav>
  );
}

export default Navbar;
