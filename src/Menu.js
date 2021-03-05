import React, { useContext } from 'react';
import { QuantityContext } from './ProductPurchase';
import logo from './images/clinique_logo.png';
import bag from './images/bag.png';
import search from './images/search.png';
import caret from './images/caret.png';
import burger from './images/burger.png';

import './styles/menu.scss';

export const Menu = () => {
  let count = useContext(QuantityContext);

  return (
    <nav className="elc-nav">
      <span className="elc-nav__logo">
        <img alt="Clinique" src={logo} />
      </span>
      <span className="elc-nav__new">New</span>
      <span className="elc-nav__cliniqueiD">clinique iD&trade;</span>
      <span className="elc-nav__bestsellers">Best Sellers</span>
      <span className="elc-nav__shop">Shop All</span>
      <span className="elc-nav__shop-open">
        <img src={caret} alt="Shop All" />
      </span>
      <span className="elc-nav__bag">
        <img alt="Shopping Bag" src={bag} />
      </span>
      <span className="elc-nav__count">({count})</span>
      <span className="elc-nav__search">
        <img alt="Search" src={search} />
      </span>
      <span className="elc-nav__burger">
        <img alt="Search" src={burger} />
      </span>
    </nav>
  );
};