import React from 'react';
import Meals from '../components/Meals';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Comidas = () =>
  <div className="Principal">
    <div>
      <Header />
      <Meals />
    </div>
    <Footer />
  </div>;

export default Comidas;
