import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_FILTER, ADD_CONTACT } from './actionTypes'

//tasks reducer
export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state.tasks, action.task];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id);
        case COMPLETE_TASK:
            return [...state.tasks, !action.task.complete];
        default:
            return state;
    }
}

//contacts reducer
export const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state.contacts, action.contact];
        default:
            return state;
    }
}

//filter reducer
export const filterReducer = (state = [], action) => { //notice default state is now an array 
    switch(action.type){
      case SET_FILTER:
        return action.filter;
      default:
        return state;
    }
  }
