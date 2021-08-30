import axios, { setAuthToken } from './axiosService';

export const CreateQuestion = data => async dispatch => {
    try {
        dispatch({ type: 'POST_QUESTIONS' });
        await setAuthToken(axios)
        const response = await axios.post(`/api/question`, data);
        dispatch({ type: 'POST_QUESTIONS_SUCCESS' });
        return response;
    } catch (error) {
        dispatch({ type: 'POST_QUESTIONS_FAIL', error });
        throw error;
    }

};
export const getquestions = (id) => async dispatch => {

    try {
        dispatch({ type: 'GET_CATEGORY_QUESTIONS' });
        await setAuthToken(axios)
        const response = await axios.get(`/api/category/${id}/questions`)
        const payload = response.data;

        dispatch({ type: 'GET_CATEGORY_QUESTIONS_SUCCESSFUL', payload });
        return response

    } catch (error) {
        console.log(error)
        // const payload = error.response.data.message
        dispatch({ type: 'GET_CATEGORY_QUESTIONS_FAIL' });
        throw error;
    }

};
