import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import channelReducer from './features/channelSlice';
import themeReducer from './features/themeSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    channel:channelReducer,
    theme: themeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
