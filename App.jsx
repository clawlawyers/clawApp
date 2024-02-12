import { View, Text } from 'react-native'
import React from 'react'
import Base from './src/screens/Base/index.jsx';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './src/reducer';
import { thunk } from 'redux-thunk';

const App = () => {
 const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
 });
 console.log('store',store.getState())
 LogBox.ignoreAllLogs();
 return (
    <Provider store={store}>
        <Base />  
    </Provider>
 );
};


export default App