import React, { createContext, useEffect, useReducer } from "react";
import {
  CLEAR_STORIES,
  FETCH_STORIES_SUCCESS,
  SEARCH_QUERY,
  FETCH_STORIES_LOADING,
} from "../constant/storyConstant";
import fetchStoryReducer from "../reducer/fetchStoryReducer";


const initialState = {
  loading: false,
  query: "",
  numberOfPages: 0,
  page: 0,
  stories: [],
};
const Api = "http://hn.algolia.com/api/v1/search?";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchStoryReducer, initialState);
  let currentTime = new Date();
  
  const checkStoryUpdate = (updatedAt) => {
    if(((currentTime.getTime()/ 1000) - updatedAt) > 86400){
      localStorage.removeItem(state.query);
      return false
    }
    return true;
  }

  const fetchData = async () => {
    try {    
      dispatch({
        type: FETCH_STORIES_LOADING,
      });
      const data = await fetch(`${Api}query=${state.query}&page=${state.page}`);
      const { hits } = await data.json();
      const storyObj = {
        value: hits,
        updatedAt: currentTime.getTime() / 1000
      }
      localStorage.setItem(state.query, JSON.stringify(storyObj));
      dispatch({
        type: FETCH_STORIES_SUCCESS,
        payload: storyObj,
      });
    } catch (error) {
      throw new Error("Some error")
    }
  };

  const searchStories = (query) => {
    dispatch({
      type: SEARCH_QUERY,
      payload: query,
    });
  };
  useEffect(() => {
    if (state.query.length > 2) {
      const storyData = localStorage.getItem(state.query);
      if(storyData !== null && checkStoryUpdate(JSON.parse(storyData).updatedAt)){
        console.log(JSON.parse(storyData))
        dispatch({
          type: FETCH_STORIES_SUCCESS,
          payload: JSON.parse(storyData)
        })
      }else{
        fetchData()
      }
    }
    else{
      dispatch({
        type: CLEAR_STORIES
      })
    }
  }, [state.query]);
  return (
    <AppContext.Provider value={{ ...state, searchStories }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
