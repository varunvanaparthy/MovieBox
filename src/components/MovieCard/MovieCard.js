import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} onError= {(e) => {e.target.src = 'https://media.istockphoto.com/vectors/image-unavailable-icon-vector-id1199906477?k=20&m=1199906477&s=170667a&w=0&h=XkZ9JPJvD2W_R7kgIcRVaTFG9YAtnRI2DqAXK1PuKjA='}} alt={data.Title} />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
