import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/hk_shadow_logo_white.svg';

import { HeaderStyle } from './style';

function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <h1>
          <img src={Logo} alt="HK hackontrol" />
        </h1>
      </Link>
      <nav>
        <Link to="/participants">For participants</Link>
        <Link to="/companies">For Companies</Link>
        <button>
          <i className="fa fa-user-circle" />
        </button>
        <button>
          <i className="fa fa-search" />
        </button>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
