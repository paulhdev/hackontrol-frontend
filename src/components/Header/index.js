import React from 'react';
import { Link } from 'react-router-dom';

// import Logo from '../../assets/hk_logo.svg';

import { HeaderStyle } from './style';

function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <h1>Hackontrol</h1>
      </Link>
      <nav>
        <Link to="/companies">Para empresas</Link>
        <Link to="/candidates">Para Candidatos</Link>
        <button>
          <i className="fa fa-user-circle" />
        </button>
        <input className="search-input" type="search" placeholder="Buscar eventos..." />
      </nav>
    </HeaderStyle>
  );
}

export default Header;
