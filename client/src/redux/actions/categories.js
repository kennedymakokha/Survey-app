import axios, { setAuthToken } from './axiosService';



export const getCategories = () => async dispatch => {
    try {

        dispatch({ type: 'FETCH_CATEGORIES' });
        await setAuthToken(axios)
        const response = await axios.get(`/api/categories`);
        const payload = response.data
        dispatch({ type: 'FETCH_CATEGORIES_SUCCESSFUL', payload });
        return response

    } catch (error) {

        throw error;
    }

};
export const PostCategory = data => async dispatch => {
    try {
        dispatch({ type: 'POST_CATEGORY' });
        await setAuthToken(axios)
        await axios.post(`/api/category`, data);
        return;
    } catch (error) {
        
        var obj = error.response.data;
        if (obj) {
            const j = obj[Object.keys(obj)[0]]
            
            throw j
        }
      
        throw error.response.data.message
        dispatch({ type: 'POST_CATEGORY_FAIL', error });
        throw error;
    }

};