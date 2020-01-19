import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
import './bitcoinCard.css';

const BitcoinCard = props => {
  return (
    <IonCard className='ionic-card'>
      <IonCardHeader>
        <IonCardSubtitle>{props.data.code}</IonCardSubtitle>
        <IonCardTitle>{props.data.rate_float}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default BitcoinCard;
