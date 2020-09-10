//tasks reducer
export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state.tasks, action.task];
        case 'DELETE_TASK':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'COMPLETE_TASK':
            return [...state.tasks, !action.task.complete];
        default:
            return state;
    }
}

//contacts reducer
export const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state.contacts, action.contact];
        case 'DELETE_CONTACT':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            return state;
    }
}

//filter reducer
export const filterReducer = (state = [], action) => { //notice default state is now an array 
    switch(action.type){
      case 'SET_FILTER':
        return action.filter;
      default:
        return state;
    }
  }
