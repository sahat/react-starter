/*
 * App Actions
 */

export const LOAD_REPOS = 'LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'LOAD_REPOS_ERROR';

/**
 * Load the repositories
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded for the current username
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
