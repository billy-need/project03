//ADD_TASK
export const addTask = () => {
    return {
        type: 'ADD_TASK',
        task: {
            id: string,
            desc: string,
            complete: boolean
        }
    }
}

//ADD_CONTACT
export const addContact = () => {
    return {
        type: 'ADD_CONTACT',
        task: {
            id: string,
            fname: string,
            lname: string,
            email: string,
            comment: string
        }
    }
}

//DELETE_ITEM
export const deleteItem = () => {
    return {
        type: 'DELETE_ITEM',
        id: string  
    }
}

//SET_FILTER
export const setFilter = () => {
    return {
        type: 'SET_FILTER',
        filter: string  //all, active, complete

    }
}