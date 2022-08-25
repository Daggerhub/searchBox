import {FETCH_STORIES_LOADING, FETCH_STORIES_SUCCESS, SEARCH_QUERY, CLEAR_STORIES, LOAD_MORE, CLEAR_QUERY} from "../constant/storyConstant"
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
                loading: false,
            } 
        case SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case CLEAR_STORIES:
            return{
                ...state,
                stories: [],
                page: 0
            }
        case LOAD_MORE:
            return{
                ...state,
                page: state.page +1
            }
        case CLEAR_QUERY:
            return{
                ...state,
                query: ""
            }                   
        default:
            return state
    }
}

export default fetchStoryReducer;