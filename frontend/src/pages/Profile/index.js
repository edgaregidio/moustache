import React from 'react';
import { FiLogOut, FiSearch, FiCalendar } from 'react-icons/fi'

// import api from '../../services/api'
import './styles.css';

import moustImg from '../../assets/logo.png';

// import { Container } from './styles';

function Profile() {
    return (
        <div className="profile-container" >
            <div className="profile-section" >
                <header className="header-section" >
                    <div className="row-one" >
                        <img src={moustImg} alt="Moustache" />
                        <h1 > Seja bem - vindo Edgar! </h1> </div >
                    <div className="button-logout" >
                        <button className="btnSair" type="submit" > Sair </button>
                        <FiLogOut size={16} color="FFB800" />
                    </div>
                </header >

                <section className="search-container" >
                    <h1> Escolha um cabeleireiro para agendar o seu horário </h1>
                    <div className="input-search" >
                        <input placeholder="Procurar Cabeleireiro" />
                        <FiSearch size={18} color="999999" />
                    </div>
                </section >

                <section className="list-container" >

                    <div className="card" >
                        <div className="card-header" >
                            <div className="avatar" >
                            </div>
                            <ul>
                                <li>
                                    <strong > Gustavo Henrique </strong>
                                    <h1> Cabelo Barba </h1>
                                    <h2> Segunda à Sábado </h2>
                                    <h2> 08 às 18 h </h2>
                                </li>
                            </ul>
                        </div>

                        <div className="card-bottom" >
                            <h1> 6 atendimentos hoje </h1>
                            <div className="diary-bottom" >
                                <h2 > Agendar </h2>
                                <FiCalendar size={18} color="FFB800" />
                            </div>
                        </div >
                    </div >

                    <div className="card" >
                        <div className="card-header" >
                            <div className="avatar" >
                            </div>
                            <ul>
                                <li>
                                    <strong > Gustavo Henrique </strong>
                                    <h1> Cabelo Barba </h1>
                                    <h2> Segunda à Sábado </h2>
                                    <h2> 08 às 18 h </h2>
                                </li>
                            </ul>
                        </div>

                        <div className="card-bottom" >
                            <h1> 6 atendimentos hoje </h1>
                            <div className="diary-bottom" >
                                <h2 > Agendar </h2>
                                <FiCalendar size={18} color="FFB800" />
                            </div>
                        </div >
                    </div >

                    <div className="card" >
                        <div className="card-header" >
                            <div className="avatar" >
                            </div>
                            <ul>
                                <li>
                                    <strong > Gustavo Henrique </strong>
                                    <h1> Cabelo Barba </h1>
                                    <h2> Segunda à Sábado </h2>
                                    <h2> 08 às 18 h </h2>
                                </li>
                            </ul>
                        </div>

                        <div className="card-bottom" >
                            <h1> 6 atendimentos hoje </h1>
                            <div className="diary-bottom" >
                                <h2 > Agendar </h2>
                                <FiCalendar size={18} color="FFB800" />
                            </div>
                        </div >
                    </div >

                    <div className="card" >
                        <div className="card-header" >
                            <div className="avatar" >
                            </div>
                            <ul>
                                <li>
                                    <strong > Gustavo Henrique </strong>
                                    <h1> Cabelo Barba </h1>
                                    <h2> Segunda à Sábado </h2>
                                    <h2> 08 às 18 h </h2>
                                </li>
                            </ul>
                        </div>

                        <div className="card-bottom" >
                            <h1> 6 atendimentos hoje </h1>
                            <div className="diary-bottom" >
                                <h2 > Agendar </h2>
                                <FiCalendar size={18} color="FFB800" />
                            </div>
                        </div >
                    </div >

                    <div className="card" >
                        <div className="card-header" >
                            <div className="avatar" >
                            </div>
                            <ul>
                                <li>
                                    <strong > Gustavo Henrique </strong>
                                    <h1> Cabelo Barba </h1>
                                    <h2> Segunda à Sábado </h2>
                                    <h2> 08 às 18 h </h2>
                                </li>
                            </ul>
                        </div>

                        <div className="card-bottom" >
                            <h1> 6 atendimentos hoje </h1>
                            <div className="diary-bottom" >
                                <h2 > Agendar </h2>
                                <FiCalendar size={18} color="FFB800" />
                            </div>
                        </div >
                    </div >

                    <div className="card" >
                        <div className="card-header" >
                            <div className="avatar" >
                            </div>
                            <ul>
                                <li>
                                    <strong > Gustavo Henrique </strong>
                                    <h1> Cabelo Barba </h1>
                                    <h2> Segunda à Sábado </h2>
                                    <h2> 08 às 18 h </h2>
                                </li>
                            </ul>
                        </div>

                        <div className="card-bottom" >
                            <h1> 6 atendimentos hoje </h1>
                            <div className="diary-bottom" >
                                <h2 > Agendar </h2>
                                <FiCalendar size={18} color="FFB800" />
                            </div>
                        </div >
                    </div >
                    
                </section>
            </div>
        </div>
    );
}

export default Profile;