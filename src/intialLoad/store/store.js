/**
 * Created by eugene on 05/29/17.
 */

import { createStore } from 'redux'
import initialState from './initialState'
import reducer from '../reducers/splity'

let store = createStore(reducer, initialState);

export default store


