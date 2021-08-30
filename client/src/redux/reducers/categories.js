
const initialState = {
    category: {},
    errors: [],
    error: '',
    categories: [],
    loading: true
}

export default function store(state = initialState, action) {
    switch (action.type) {

        case 'FETCH_CATEGORIES':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_CATEGORIES_SUCCESSFUL':
            return {
                ...state,
                loading: true,
                categories: action.payload
            }
        case 'FETCH_CATEGORIES_FAIL':
            return {
                ...state,
                loading: true,
                error: action.payload
            }

        case 'POST_CATEGORY':
            return {
                ...state,
                loading: true
            }

        case 'POST_CATEGORY_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}