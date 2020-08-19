import React from 'react';
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi';

import './styles.css';

import moustImg from '../../assets/logo.png';

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={moustImg} alt="Moustache" />
        <form>
          <h1>Faça seu Login</h1>

          <div className="input" >
            <input placeholder="Email" type="email" />
            <FiMail size={16} color="9A9A9A" />
          </div>
          <div className="input" >
            <input placeholder="Senha" type="password"/>
            <FiLock size={16} color="9A9A9A" />
          </div>
          <a href="/recover">Esqueci minha senha</a>

          <button className="button" type="submit">LOGIN</button>
        </form>


        <Link className="createUser" to="/register" >Não tem uma conta? Criar conta</Link>

      </section>
    </div>
  );
}

export default Login;