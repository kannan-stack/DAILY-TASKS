export const setUser = (name, age, email) => {
    return {
        type: 'SET_USER',
        payload: {
            name,
            age,
            email
        }
    };
};