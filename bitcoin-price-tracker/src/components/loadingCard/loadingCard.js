import React, { Component } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonSkeletonText
} from '@ionic/react';
import './loadingCard.css';

const LoadingCard = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonSkeletonText animated className='loading-card__currency-name' />
        </IonCardSubtitle>
        <IonCardTitle>
          <IonSkeletonText animated className='loading-card__currency-value' />
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default LoadingCard;
