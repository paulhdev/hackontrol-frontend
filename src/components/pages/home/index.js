import React from 'react';
import { Link } from 'react-router-dom';

import {
  Banner, FormEvent, NextEvents, Newsletter,
} from './style';

import Cards from '../cards';

function Home() {
  const InputEnv = (e) => {
    e.preventDefault();
    alert('Ops! :(');
  };

  return (
    <div>
      <Banner className="banner">
        <div className="overlay">
          <article className="content">
            <h1>
            Hackathons
              {' '}
              <br />
              in
              {' '}
              <br />
              One Place
            </h1>
            <p>several online hackathons for you or your business</p>
          </article>
          <FormEvent>
            <p>Search for an online event</p>
            <input type="text" placeholder="event name" />
            <button onClick={InputEnv}>Buscar</button>
          </FormEvent>
        </div>
      </Banner>
      <NextEvents>
        <h2>Next Events</h2>
        <div>
          <Cards />
        </div>
        <Link to="/">More...</Link>
      </NextEvents>
      <Newsletter>
        <div className="overlay">
          <article>
            <p>
            Subscribe to our newsletter and
              {' '}
              <br />
              {' '}
              don't miss any more events!
            </p>
            <form>
              <input type="email" placeholder="Your e-mail..." />
              <button onClick={InputEnv}>Sign</button>
            </form>
          </article>
        </div>
      </Newsletter>
    </div>
  );
}

export default Home;
