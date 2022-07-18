import React, { useEffect } from "react";
import {useState} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import search from "../../images/search.png";
import "./Home.scss"
import { useCookies } from 'react-cookie';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const [cookies, setCookie] = useCookies(['movie']);

  function searchData() {
    dispatch(fetchAsyncMovies(message)); 
    dispatch(fetchAsyncShows(message));
    setCookie('movie', message, { path: '/' });
  }

  useEffect(() => {
    if ((typeof cookies.movie !== "undefined") && (typeof message === "undefined")) {
      dispatch(fetchAsyncMovies(cookies.movie));
      dispatch(fetchAsyncShows(cookies.movie));
    }
    else {
      dispatch(fetchAsyncMovies(message));
      dispatch(fetchAsyncShows(message));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div id = "parent">
      <div id="searchBar">
      <input type = "text" id="searchBox" placeholder="Search for your favorite movies, shows" onChange = {e => {setMessage(e.target.value);}} 
          onKeyPress = {e => {if (e.key === 'Enter') searchData()}} >
      </input>
      <button id = "button" onClick={() => searchData()}> 
          <img src = {search} alt = "search"></img>
      </button>
      </div>
      <MovieListing />
    </div>
  );
}

export default Home;
