import React from 'react';

import { Banner, FormEvent, NextEvents } from './style';

import Cards from '../cards';

function Home() {
  return (
    <div>
      <Banner className="banner">
        <div className="overflow">
          <article className="content">
            <h1>
              Todos os <br />
              Hackathons em um <br />
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
      <NextEvents>
        <h2>Próximos eventos</h2>
        <div>
          <Cards />
        </div>
      </NextEvents>
    </div>
  );
}

export default Home;
