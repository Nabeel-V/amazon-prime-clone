import React, { useState, useEffect } from "react";
import axios from "../../../Axios";
import { API_KEY } from "../../../Constants/Constants";
import RowPost from "../../RowPost/RowPost";

const Movies = () => {

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios
      .get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setGenre(response.data.genres);
      });
  }, []);
  const moviesapi = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=`;

  return (
    <div>
      <h1>TV Shows</h1>
      {genre.map((item) => {
        return (
          <div>
            <RowPost title={item.name} url={moviesapi+item.id}/>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;

