import React from 'react';
import Cocktails from '../components/Cocktails';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Bebidas = () =>
  <div className="Principal">
    <div>
      <Header />
      <Cocktails />
    </div>
    <Footer />
  </div>;

export default Bebidas;
