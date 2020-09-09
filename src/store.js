import tasksReducer from './reducers/tasks';
import contactsReducer from './reducers/contacts'
import filterReducer from './reducers/filter'
import { combineReducers, createStore } from 'redux';


const reducer = combineReducers({
    tasks : tasksReducer,
    contacts : contactsReducer,
    filter : filterReducer
})

var store = createStore(reducer)

export default store;

