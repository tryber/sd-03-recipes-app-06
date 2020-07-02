import React from 'react';
import { Link } from 'react-router-dom';
import Drink from '../images/drinkIcon.svg';
import Search from '../images/exploreIcon.svg';
import Fork from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container" data-testid="footer">
      <Link
        className="footer-drinks"
        to="/bebidas"
      >
        <img data-testid="drinks-bottom-btn" src={Drink} alt="Bebidas" />
      </Link>
      <Link
        className="footer-explore"
        to="/explorar"
      >
        <img src={Search} alt="Exploração" data-testid="explore-bottom-btn" />
      </Link>
      <Link
        className="footer-fork"
        to="/comidas"
      >
        <img src={Fork} alt="Comidas" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
