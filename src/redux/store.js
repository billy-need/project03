import { tasksReducer, contactsReducer, filterReducer }  from './reducers';
import { combineReducers, createStore } from 'redux';


const reducer = combineReducers({
    tasks : tasksReducer,
    contacts : contactsReducer,
    filter : filterReducer
})

var store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

