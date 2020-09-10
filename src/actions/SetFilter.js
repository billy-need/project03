//SET_FILTER
export const setFilter = (string) => {
    return {
        type: 'SET_FILTER',
        filter: string  //all, active, complete

    }
}