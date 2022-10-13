import React from "react";

function Login({onLogin}) {
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
    onLogin(email, password);
}

  return (
    <form className="signform" onSubmit={handleSubmit}>
      <h1 className="singform__title">Вход</h1>
      <input className="signform__input" name="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input className="signform__input" name="password" type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
      <button className="signform__button">Войти</button>
    </form>
  );
}

export default Login;
