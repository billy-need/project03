//ADD_TASK
export const completeTask = (id) => {
    return {
        type: 'COMPLETE_TASK',
        id: id
    }
}