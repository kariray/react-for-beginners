import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.large_cover_image} alt="" />
    </div>
  );
}

export default Detail;
