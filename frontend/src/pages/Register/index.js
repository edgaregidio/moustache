import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLock, FiUser, FiMail, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css';

import moustImg from '../../assets/logo.png';

export default function Register() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      fullName,
      email,
      password,
      confirmPassword
    };

    try {
      if (password !== confirmPassword) {
        alert('As senhas não podem ser diferentes');
      }
      else {
        api.post('register', data);
        alert(`Cadastro realizado com sucesso! Faça o seu login ${data.fullName}`)
        history.push('/');
      };

    } catch (error) {
      alert('Erro no cadastro tente novamente')
    };
  };

  return (
    <div className="register-container">
      <section className="form">
        <img src={moustImg} alt="Moustache" />

        <form onSubmit={handleRegister}>
          <h1>Por favor, preencha <br></br>todos os campos</h1>

          <div className="input" >
            <input
              placeholder="Nome Completo"
              required
              value={fullName}
              onChange={text => setFullName(text.target.value)}
            />
            <FiUser size={16} color="9A9A9A" />
          </div>

          <div className="input" >
            <input
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={text => setEmail(text.target.value)}
            />
            <FiMail size={16} color="9A9A9A" />
          </div>

          <div className="input" >
            <input
              placeholder="Senha"
              required
              type="password"
              value={password}
              onChange={text => setPassword(text.target.value)} />
            <FiLock size={16} color="9A9A9A" />
          </div>

          <div className="input" >
            <input
              placeholder="Confirmar Senha"
              required
              type="password"
              value={confirmPassword}
              onChange={text => setConfirmPassword(text.target.value)} />
            <FiLock size={16} color="9A9A9A" />
          </div>

          <button className="button" type="submit">CADASTRAR</button>

          <div className="bottom-group">
            <FiArrowLeft size={16} color="FFB800" />
            <Link className="returnUser" to="/" >Já tenho cadastro</Link>
          </div>
          
        </form>

      </section>
    </div>
  )
}