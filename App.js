import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import ShopNavigation from './navigation/ShopNavigation'

import productReducer from './store/reducers/products'

const rootReducer = combineReducers({
  products: productReducer,

})

const store = createStore(rootReducer)
export default function App() {
  return (

    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
