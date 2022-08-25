import React, { createContext, useEffect, useReducer } from "react";
import {
  CLEAR_STORIES,
  FETCH_STORIES_SUCCESS,
  SEARCH_QUERY,
  FETCH_STORIES_LOADING,
  LOAD_MORE,
  CLEAR_QUERY,
} from "../constant/storyConstant";
import fetchStoryReducer from "../reducer/fetchStoryReducer";

const initialState = {
  loading: false,
  query: "",
  numberOfPages: 0,
  page: 0,
  stories: [],
};

const Api = "https://api.unsplash.com/search/photos?";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchStoryReducer, initialState);
  let currentTime = new Date();
  
  const checkStoryUpdate = (storyData) => {
    if(((currentTime.getTime()/ 1000) - storyData.updatedAt) > 86400){
      localStorage.removeItem(state.query);
      return false
    }
    if(!(storyData.page === state.page)){
      return false
    }
    return true;
  }

  const debounce = (callback, timeout = 700) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, timeout);
    };
  };

  const fetchData = async () => {
    try {    
      dispatch({
        type: FETCH_STORIES_LOADING,
      });
      const data = await fetch(`${Api}query=${state.query}&client_id=jYksj86D3jcLdIxFq6tSZ7ZGHMW5MBEQojUp_bzvQKA&per_page=5&page=${state.page}`);
      const { results } = await data.json();
      const storyObj = {
        value: results,
        updatedAt: currentTime.getTime() / 1000,
        page: state.page
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

  const debouncedFetchFunc = debounce(() => fetchData())

  const loadMore = () => {
    dispatch({
      type: LOAD_MORE,
    })
  }

  const clearQuery = () => {
    dispatch({
      type: CLEAR_QUERY
    })
  }

  const searchStories = (query) => {
    dispatch({
      type: SEARCH_QUERY,
      payload: query,
    });
  };
  useEffect(() => {
    if (state.query.length > 2) {
      const storyData = localStorage.getItem(state.query);
      if(storyData !== null && checkStoryUpdate(JSON.parse(storyData))){
        dispatch({
          type: FETCH_STORIES_SUCCESS,
          payload: JSON.parse(storyData)
        })
      }else{
        debouncedFetchFunc()      
      }
    }
    else{
      dispatch({
        type: CLEAR_STORIES
      })
    }
  }, [state.query,state.page]);
  return (
    <AppContext.Provider value={{ ...state, searchStories, loadMore, clearQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
