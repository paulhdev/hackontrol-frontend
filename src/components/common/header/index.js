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
        <Link to="/candidates">Para participantes</Link>
        <Link to="/companies">Para empresas</Link>
        <button>
          <i className="fa fa-user-circle" />
        </button>
        <button>
          <i className="fa fa-search"></i>
        </button>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
