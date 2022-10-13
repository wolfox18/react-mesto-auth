import React from "react";
import logoPath from "../images/logo-mesto.svg";

function Header({ isLoggedIn, email, onLogout }) {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img
          src={logoPath}
          alt="Логотип Mesto Russia"
          className="logo__image"
        />
      </a>
      <div className="header__login-container">
        <p className="header__email">{isLoggedIn ? email : ""}</p>
        <button className="header__link transparent-btn" onClick={onLogout}>{isLoggedIn ? "Выйти" : "Войти"}</button>
      </div>
    </header>
  );
}
export default Header;
