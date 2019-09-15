import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Card } from './style';

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/events')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
      {
        !data.length
          && <p>Ops! Não há eventos no momento :(</p>
      }
      {
        data.map((companie) => (
          <Card key={companie.id}>
            <strong>{companie.eventTitle}</strong>
            <img src={companie.image} alt={companie.name} />
            <p>{companie.date}</p>
            <Link to={`/aboutEvent/${companie.id}`}>
              Mais informações
            </Link>
          </Card>
        ))
      }
      {/* <Card>
        <strong>Open Hack 2019</strong>
        <img src={ShaweeLogo} alt="shawee" />
        <p>09/09/2019</p>
        <button>Mais informações</button>
      </Card>
      <Card>
        <strong>Hackathon BR 3ª edição</strong>
        <img src={TechGroup} alt="shawee" />
        <p>07/10/2019</p>
        <button>Mais informações</button>
      </Card>
      <Card>
        <strong>9º Meetup Hive Eventos</strong>
        <img src={HiveLogo} alt="shawee" />
        <p>Em Breve</p>
        <button>Mais informações</button>
      </Card> */}
    </div>
  );
}

export default Cards;
