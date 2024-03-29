import { act } from "react-dom/test-utils";
import { extractCastID } from "./utils";
const apiKey = "b3721fd8d8mshb6df83063eb73e8p11054fjsnb4d2c2322b3b";
const tmdbApiKey = "a41a171fff9eb512b2a0d0fe15d3405f";
const tmdbApiReadAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFhMTcxZmZmOWViNTEyYjJhMGQwZmUxNWQzNDA1ZiIsInN1YiI6IjVmYjRhOGJiOWNhNzU5MDAzZjRmNjZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UvPomt3YxXPsbeE0Lm03taAncW1lDlKM2omv0Yip80Q";

function findByTitle(title) {
  return fetch(`https://imdb8.p.rapidapi.com/title/find?q=${title}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  })
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((response) => {
      console.log(response.results);
      console.log(response.results.map((item) => item.id));
      return response.results.filter((item) => item.id.includes("title"));
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

async function fetchMovieByID(movieID) {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${tmdbApiKey}`,
    {
      method: "GET",
    }
  );
  let movie = await movieRes.json();
  const creditsRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${tmdbApiKey}`,
    {
      method: "GET",
    }
  );
  let credits = await creditsRes.json();
  movie.casts = credits.cast;
  return movie;
}

function findMoviesByUser(userID) {
  return Promise.resolve([]);
}

async function fetchPopularMovies(num) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}`,
    {
      method: "GET",
    }
  );
  const payload = await res.json();
  return payload.results.slice(0, num);
}

async function fetchMoviesByTitle(title) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${title}`,
    {
      method: "GET",
    }
  );

  const payload = await res.json();
  return payload.results;
}

const getMovieNameById = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKey}&language=en-US`,
    {
      method: "GET",
    }
  );
  const movieDetails = await res.json();
  return movieDetails.title;
};

async function fetchActorByID(actorID) {
  const actorDetailsRes = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}?api_key=${tmdbApiKey}`,
    {
      method: "GET",
    }
  );
  let actorDetails = await actorDetailsRes.json();

  const actorPhotosRes = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}/images?api_key=${tmdbApiKey}`,
    {
      method: "GET",
    }
  );
  let profiles = (await actorPhotosRes.json()).profiles;
  console.log(profiles);
  profiles.sort((a, b) => b.vote_average - a.vote_average);
  actorDetails.photos = profiles;

  const actorCreditsRes = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${tmdbApiKey}`,
    {
      method: "GET",
    }
  );
  let credits = (await actorCreditsRes.json()).cast;
  credits.sort((a, b) => b.vote_average - a.vote_average);
  actorDetails.credits = credits;

  return actorDetails;
}

async function findActorsByName(name, page) {
  const escapedName = escape(name);
  const actorsRes = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${tmdbApiKey}&query=${escapedName}&page=${page}`,
    {
      method: "GET",
    }
  );
  return await actorsRes.json();
}

const service = {
  findByTitle,
  findMoviesByUser,
  fetchPopularMovies,
  fetchMovieByID,
  fetchActorByID,
  fetchMoviesByTitle,
  findActorsByName,
  getMovieNameById,
};

export default service;
