/**
 * ************************************
 *
 * @module  store.js
 * @author Phillip Yoo & Matthew Miller
 * @date 11/20/2021
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

 import { createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './reducers/index';
 
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 const store = createStore(
   reducers,
   composeWithDevTools()
 );
 
 export default store;