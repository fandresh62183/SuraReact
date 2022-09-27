import React from 'react';
import ReactDOM from 'react-dom/client';
import {Fabian} from './Componente/Fabian.js';
import {Menu} from './Menu/Menu.js';
import {Banner} from './Banner/Banner.js';
import { Sinopsis } from './Sinopsis/Sinopsis.js';
import { Footer } from './Footer/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Menu/>
   <Fabian/>
   <Banner/>
   <Sinopsis/>
   <Footer/>
   
  </React.StrictMode>
);

