import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o estilo do Bootstrap

import '../Login/Login.css';


export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de submissão do formulário aqui
  };

  return (
    <div className="form-background">
        <div className="form-wrapper">
            <form className="form-horizontal" onSubmit={handleSubmit}>

                {/* <h3 className="title">Give Life</h3> */}
                
                {/* Logotipo */}

                <div className="logo-wrapper">
                  <img src={process.env.PUBLIC_URL + "/logoVertical.png"} alt="Logotipo Give Life" />
                </div>
                <br />
                <div className="form-group">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input className="form-control" type="email" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input className="form-control" type="password" placeholder="Password" />
                </div>
                <button className="btn signin" type="submit">
                  Sign up
                </button>
                <span className="forgot-pass">
                  <a href="/">Forgot Username/Password?</a>
                </span>
            </form>
        </div>

    </div>

  );
};
