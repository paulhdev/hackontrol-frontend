import React from 'react';

import ShaweeLogo from '../../../assets/shawee.png';
import TechGroup from '../../../assets/techgroup.svg';
import HiveLogo from '../../../assets/hive_logo.svg';

import { Card } from './style';

function Cards() {
  return (
    <div>
      <Card>
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
      </Card>
    </div>
  );
}

export default Cards;
