import reduxWebsocket from '@giantmachines/redux-websocket';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/orderbook/counterSlice';

const reduxWebsocketMiddleware = reduxWebsocket();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [reduxWebsocketMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
