
const initialState = {
    question: {},
    errors: [],
    error: '',
    questions: [],
    loading: true
}

export default function store(state = initialState, action) {
    switch (action.type) {

        case 'GET_CATEGORY_QUESTIONS':
            return {
                ...state,
                loading: true
            }
        case 'GET_CATEGORY_QUESTIONS_SUCCESSFUL':
            return {
                ...state,
                loading: false,
                questions: action.payload
            }
        case 'GET_CATEGORY_QUESTIONS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'POST_QUESTIONS':
            return {
                ...state,
                loading: true
            }
        case 'POST_QUESTIONS_SUCCESS':
            return {
                ...state,
                loading: false,
               
            }
        case 'POST_QUESTIONS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}