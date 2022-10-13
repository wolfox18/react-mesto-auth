import React from "react";
import { Link } from 'react-router-dom';

function Register({onLogin: onRegister}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password);
}

  return (
    <form className="signform" onSubmit={handleSubmit}>
      <h1 className="singform__title">Регистрация</h1>
      <input className="signform__input" name="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input className="signform__input" name="password" type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
      <button className="signform__button">Зарегистрироваться</button>
      <Link to="/sign-in" className="signform__link">Уже зарегистрированы? Войти</Link>
    </form>
  );
}

export default Register;