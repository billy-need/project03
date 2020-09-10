//DELETE_TASK
export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id: id  
    }
}