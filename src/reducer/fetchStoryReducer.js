import {FETCH_STORIES_LOADING, FETCH_STORIES_SUCCESS, SEARCH_QUERY, CLEAR_STORIES} from "../constant/storyConstant"
const fetchStoryReducer = (state, action) => {
    switch (action.type) {
        case FETCH_STORIES_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_STORIES_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                loading: false
            } 
        case SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case CLEAR_STORIES:
            return{
                ...state,
                stories: []
            }           
        default:
            return state
    }
}

export default fetchStoryReducer;