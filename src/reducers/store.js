import tasksReducer from './tasks';
import contactsReducer from './contacts'
import filterReducer from './filter'
import { combineReducers, createStore } from 'redux';


const reducer = combineReducers({
    tasks : tasksReducer,
    contacts : contactsReducer,
    filter : filterReducer
})

var store = createStore(reducer)

export default store;

