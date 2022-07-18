import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__title">ADMIN INSPECTOR</h1>
      <ul className="navbar__list">
        <li>AJOUTER UN ADHERENT</li>
        <li>PUBLICATION ACTIVITES / INFO</li>
        <li>CONSULTATION BASE DE DONNEES</li>
        <li>MODIFICATION BASE DE DONNEES</li>
        <li>MESSAGERIE</li>
      </ul>
    </div>
  );
};

export default Navbar;
