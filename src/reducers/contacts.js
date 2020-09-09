//contacts reducer
const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state.contacts, action.contact];
        case 'DELETE_CONTACT':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            return state;
    }
}

export default contactsReducer;
