import React from 'react';
import { Link } from 'react-router-dom';
import Drink from '../images/drinkIcon.svg';
import Search from '../images/searchIcon.svg';
import Fork from '../images/mealIcon.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container" data-testid="footer">
      <Link
        className="footer-drinks"
        data-testid="drinks-bottom-btn"
        to="/bebidas/"
      >
        <img src={Drink} alt="Bebidas" />
      </Link>
      <Link
        className="footer-explore"
        data-testid="explore-bottom-btn"
        to="/explorar/"
      >
        <img src={Search} alt="Exploração" />
      </Link>
      <Link
        className="footer-fork"
        data-testid="food-bottom-btn"
        to="/comidas/"
      >
        <img src={Fork} alt="Comidas" />
      </Link>
    </div>
  );
};

export default Footer;
