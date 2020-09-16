import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_FILTER, ADD_CONTACT } from './actionTypes'
import { combineReducers } from 'redux';

//tasks reducer
export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.task];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id);
        case COMPLETE_TASK:
            return state.map(task => (task.id === action.id) ? {...task, complete: !task.complete} : task);
        default:
            return state;
    }
}

//contacts reducer
export const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.contact];
        default:
            return state;
    }
}

//filter reducer
export const filterReducer = (state = {taskFilter: 'all'}, action) => {
    switch (action.type) {
        case SET_FILTER:
            return ({taskFilter: action.taskFilter});
        default:
            return state;
    }
}

//combined reducer
export const reducer = combineReducers({
    tasks: tasksReducer,
    contacts: contactsReducer,
    taskFilter: filterReducer
})