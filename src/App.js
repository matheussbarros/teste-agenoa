import React from 'react';
import './App.css';

import { Header } from './components/header/Header'
import { SeguroDeO } from './components/seguroDeO/SeguroDeO'
import { Objetivo } from './components/objetivo-seguro/Objetivo'
import { Coberturas } from './components/coberturas/Coberturas'
import { SeguroProtege } from './components/seguro-protege/SeguroProtege'
import { SobreCoinsure } from './components/sobre-coinsure/SobreCoinsure'
import { Desmontracao } from './components/desmostracao/Desmontracao'
import { Equipe } from './components/equipe-dedicada/Equipe'
import { SobreAgenoa } from './components/sobre-agenoa/SobreAgenoa'
import { Parceiros } from './components/parceiros/Parceiros'
import { Footer } from './components/footer/Footer'



function App() {
  return (
    <div>
      <Header />
      <main>
        <SeguroDeO />
        <Objetivo />
        <Coberturas />
        <SeguroProtege />
        <SobreCoinsure />
        <Desmontracao />
        <Equipe />
        <SobreAgenoa />
        <Parceiros />
      </main>
      <Footer />
    </div>
  );
}

export default App;
