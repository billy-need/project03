import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_FILTER, ADD_CONTACT } from './actionTypes'

//ADD_TASK
export const addTask = (task) => {
    return {
        type: ADD_TASK,
        task: task
    }
}

//DELETE_TASK
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id: id  
    }
}

//COMPLETE_TASK
export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}

//SET_FILTER
export const setFilter = (taskFilter) => {
    return {
        type: SET_FILTER,
        taskFilter: taskFilter  //all, active, complete
    }
}

//ADD_CONTACT
export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        contact: contact
    }
}
