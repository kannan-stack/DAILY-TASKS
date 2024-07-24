const initialState = {
    name: '',
    age: '',
    email: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                email: action.payload.email
            };
        default:
            return state;
    }
};

export default userReducer;