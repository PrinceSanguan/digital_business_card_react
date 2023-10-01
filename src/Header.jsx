import React from "react";
import Litrato from "./prince.jpg";

export default function Header() {
  return (
    <header className="header--container">
      <img src={Litrato} alt="broken-image" className="header--image" />
      <p className="header--name">Prince E. Sanguan</p>
      <p className="header--work">Frontend Developer</p>
      <p className="header--web">Website-prince</p>
    </header>
  );
}
