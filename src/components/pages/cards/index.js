import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import ShaweeLogo from '../../../assets/shawee.png';
import TechGroup from '../../../assets/techgroup.svg';
import HiveLogo from '../../../assets/hive_logo.svg';
import { Card, Button } from './style';

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
          && <p>Ops! No Events :(</p>
      }
      {
        data.map((companie) => (
          <Card key={companie.id}>
            <strong>{companie.eventTitle}</strong>
            <img src={companie.image} alt={companie.name} />
            <p>{companie.date}</p>
            <Link to={`/aboutEvent/${companie.id}`}>
              More Informations
            </Link>
          </Card>
        ))
      }

    </div>
  );
}

export default Cards;
