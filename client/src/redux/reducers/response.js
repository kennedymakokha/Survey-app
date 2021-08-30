
const initialState = {
    response: {},
    errors: [],
    error: '',
    count:0,
    responses: [],
    loading: true
}

export default function store(state = initialState, action) {
    switch (action.type) {

        case 'POST_RESPONSE':
            return {
                ...state,
                loading: true
            }

        case 'POST_RESPONSE_FAIL':
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        case 'GET_RESPONSES_SUCCESSFUL':
            return {
                ...state,
                loading: false,
                responses: action.payload
            }

        default:
            return state;
    }
}