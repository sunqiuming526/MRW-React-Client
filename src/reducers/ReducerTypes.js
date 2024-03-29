export const SEARCH_KEYWORD = "SEARCH_KEYWORD";
export const TYPE_KEYWORD = "TYPE_KEYWORD";
// Find movies by a given title.
export const FIND_MOVIES_BY_TITLE = "FIND_MOVIES_BY_TITLE";
// Fetch movies for a user.
export const FETCH_MOVIES = "FETCH_MOVIES";
// Fetch details of a given movie.
export const FETCH_MOVIE = "FETCH_MOVIE";
// Fetch details of a given actor.
export const FETCH_ACTOR = "FETCH_ACTOR";
// Fetch a list of actors.
export const FETCH_ACTORS = "FETCH_ACTORS";

// Get the current login user data
export const GET_LOGIN_USER = "GET_LOGIN_USER"
export const FIND_ARTICLES_BY_KEYWORD = " FIND_ARTICLES_BY_KEYWORD";
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_ARTICLES_BY_AUTHOR = "FETCH_ARTICLES_BY_AUTHOR";
export const FETCH_ARTICLE_BY_ID = "FETCH_ARTICLE_BY_ID";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const ON_CHANGE = "ON_CHANGE";
export const UPDATE_SEARCH_TYPE = "UPDATE_SEARCH_TYPE"

const actions = {
  SEARCH_KEYWORD,
  TYPE_KEYWORD,
  FIND_MOVIES_BY_TITLE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_ACTOR,
  FETCH_ACTORS,

  GET_LOGIN_USER,
  FETCH_ARTICLES,
  FETCH_ARTICLE,
  FETCH_ARTICLES_BY_AUTHOR,
  FETCH_ARTICLE_BY_ID,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  ON_CHANGE,
  UPDATE_SEARCH_TYPE
};

export default actions;
