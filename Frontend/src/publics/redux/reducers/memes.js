const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isFinish: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEMES_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_MEMES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data
            };

        case 'GET_MEMES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                data: 'Error Network'
            };
        default:
            return state
    }
} 