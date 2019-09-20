import React, { useState, useEffect } from 'react';
import api from '../../../../services/api';

import { Banner, InfoArea } from './style';

function AboutEvent({ match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get(`/events/${match.params.id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleSignUp = () => {
    alert('Obrigado por se inscrever :)');
  };

  return (
    <div>
      <Banner>
        <h1>Evento</h1>
      </Banner>
      <section>
        {
          <InfoArea>
            <img src={data.image} alt={data.name} />
            <strong>
              Event:
              {' '}
              {data.eventTitle}
            </strong>
            <strong>About event:</strong>
            <p>{data.eventDescription}</p>
            <p className="date">
              Start:
              {' '}
              {data.date}
            </p>
            <button onClick={handleSignUp}>Sign-up</button>
          </InfoArea>
        }
      </section>
    </div>
  );
}

export default AboutEvent;
