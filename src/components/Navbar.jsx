import React from 'react';
import { 
  Link
} from 'react-router-dom';


export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
    Note App
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link 
            className="nav-link active"
            to="/"
            exact
          >
          Главная
          </Link>
        </li>
        <li className="nav-item">
        <Link 
        className="nav-link active"
        to="/about"
        >
        Информация
        </Link>
        </li>
    </ul>
  </nav>
)