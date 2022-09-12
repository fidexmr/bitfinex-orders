import { connect, send } from '@giantmachines/redux-websocket';
import './App.css';
import { store } from './app/store';
import { API_URL, SUBSCRIPTION_MSG } from './constants';
import { OrderBook } from './features/orderbook/OrderBook';

function App() {
  store.dispatch(connect(API_URL));
  store.dispatch(send(SUBSCRIPTION_MSG));
  return (
    <div className="App">
      <main>
        <OrderBook />
      </main>
    </div>
  );
}

export default App;
