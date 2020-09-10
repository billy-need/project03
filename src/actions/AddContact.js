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