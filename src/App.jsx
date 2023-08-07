import logo from "./assets/logo.svg";
import "./global.css";

export function App() {

  return <div className = "container">
    <header className = "header">
      <img src = {logo} alt = "privhealth"/> 
      <span> Otimizando recursos </span>
    </header>
    <form>
      <div className="inputContainer">
        <label htmlFor="email">E-mail</label>
        <input type="text"
        name="email" 
        id="email"
        placeholder="funcionario@gmail.com"
        /> 

      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input type="password"
        name="password" 
        id="password"
        placeholder="****************"
        /> 
      </div>
      <button className="button">
      <a href=""> Esqueceu a senha</a>
        entrar
      </button>
      <div className="footer">
        <p>Você ainda não tem conta?</p>
        <a href="#">Crie uma conta</a>
      </div>
    </form>
  </div>
}