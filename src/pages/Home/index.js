import React from 'react';

import { Banner, FormEvent } from './style';

import Header from '../../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <Banner className="banner">
        <div className="overflow">
          <article className="content">
            <h1>
              Todos os <br/>
              Hackathons em um <br/>
              só lugar
            </h1>
            <p>Centenas de hackathons e eventos online para você ou para sua empresa</p>
          </article>
          <FormEvent>
            <p>Encontre o evento mais perto de você</p>
            <input type="text" placeholder="Digite Cidade, Estado ou Região" />
            <p>Ou procure por um evento online</p>
            <input type="text" placeholder="Digite o nome ou tipo do evento" />
            <button>Buscar</button>
          </FormEvent>
        </div>
      </Banner>
    </div>
  );
}

export default Home;
