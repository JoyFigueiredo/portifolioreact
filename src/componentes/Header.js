import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" >
          <Link className="navbar-brand" to="/">Joice Barros de Figueiredo</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Página Inicial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projetos">Projetos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clientes">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contatos">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

      export default Header;
