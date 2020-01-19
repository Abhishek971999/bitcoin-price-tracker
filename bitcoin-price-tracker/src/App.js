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

class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  };

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();

    this.setState(
      {
        bitcoinInfo,
        loading: false
      },
      () => console.log(this.state)
    );
  }

  render() {
    const { bitcoinInfo } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>Bitcoin Price tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <LoadingCard />
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
