//tasks reducer
const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state.tasks, action.task];
        case 'DELETE_TASK':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'SET_COMPLETE':
            return [...state.tasks, action.task];
        default:
            return state;
    }
}

export default tasksReducer;