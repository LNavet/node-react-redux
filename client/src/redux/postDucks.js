import axios from 'axios';

const initialData = [];
const BASE_URL = `//localhost:8080`
//Types
const ADD_POST = 'ADD_POST';
const GET_ALL_POST  = 'GET_ALL_POST';
const DELETE_POST  = 'DELETE_POST';
const FILTER_POST = 'FILTER_POST';
const CLEAN_FILTER = 'CLEAN_FILTER';


//Reducer
export default function postDucks(state = initialData, {type, payload}){
    switch (type) {
        case GET_ALL_POST:
            return [...state].concat(payload)

        case ADD_POST:
            return [...state].concat(payload)

        case DELETE_POST:
            if (payload)
                return state.filter(value => value.id !== payload)
            return state

        case FILTER_POST:
            return state.filter(value => value.name.includes(payload))

        case CLEAN_FILTER:
            return payload

        default:
            return state
            
    }
};

//Actions
export const getAllPosts = () => async (dispatch,getState) => {
    try {
        let results = await axios.get(`${BASE_URL}/api/post/list`);
        dispatch({
            type: GET_ALL_POST,
            payload: results.data
        })
    } catch (error) {
        console.log(error)
    }
};

export const addPost = (post) => async (dispatch,getState) =>{
    try {
        console.log(post)
        let result = await axios.post(`${BASE_URL}/api/post/create`,{
            name: post.name,
            description: post.description
        })
        dispatch({
            type: ADD_POST,
            payload: result.data
        })
    } catch (error) {
        console.log(error)
    }
};

export const deletePost = (id) => async (dispatch,getState) => {
    try {
        axios.delete(`${BASE_URL}/api/post/delete/${id}`)
        .then( data => {
            dispatch({
                type:DELETE_POST,
                payload: id
            })
        })
        .catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
}

export const searchPost = (text) => async (dispatch) => {
    try {
        dispatch({
            type:FILTER_POST,
            payload: text
        })
    } catch (error) {
        console.log(error)
    }
}

export const cleanFilter = () => async (dispatch) => {
    try {
        let results = await axios.get(`${BASE_URL}/api/post/list`);
        dispatch({
            type: CLEAN_FILTER,
            payload: results.data
        })
    } catch (error) {
        console.log(error)
    }
}