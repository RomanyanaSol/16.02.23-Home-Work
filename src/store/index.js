import { createStore } from 'redux';
import { manReducer } from './reducer/manReducer';



export const store = createStore(manReducer);