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