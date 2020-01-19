import React, { Component } from 'react';
import { getBitcoinPrice } from './api/bitcoin';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react';
import LoadingCard from './components/loadingCard/loadingCard';
import BitcoinCard from './components/bitcoinCard/bitcoinCard';
import './App.css';
class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  };

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();

    this.setState({
      bitcoinInfo,
      loading: false
    });
  }

  createLoadingCards = () => {
    return (
      <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </>
    );
  };
  render() {
    const { bitcoinInfo, loading } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>Bitcoin Price tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <img
            src='https://img.icons8.com/cotton/74/000000/bitcoin--v2.png">'
            className='bitcoin__logo'
          />
          {loading === true
            ? this.createLoadingCards()
            : Object.keys(bitcoinInfo.bpi).map((item, index) => (
                <BitcoinCard data={bitcoinInfo.bpi[item]} />
              ))}
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
