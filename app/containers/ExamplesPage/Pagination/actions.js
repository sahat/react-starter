import qs from 'querystring';

export const LOAD_POPULAR_REPOS = 'LOAD_POPULAR_REPOS';
export const LOAD_POPULAR_REPOS_SUCCESS = 'LOAD_POPULAR_REPOS_SUCCESS';
export const LOAD_POPULAR_REPOS_FAILURE = 'LOAD_POPULAR_REPOS_FAILURE';

export function loadPopularRepos(currentPage = 1) {
  return (dispatch) => {
    const params = qs.stringify({
      language: 'javascript',
      sort: 'stars',
      page: currentPage,
      per_page: '10'
    });

    dispatch({ type: LOAD_POPULAR_REPOS });

    return fetch(`https://api.github.com/search/repositories?q=${params}`)
      .then(response => {
        return response.json().then(json => {
          if (response.ok) {
            dispatch({ type: LOAD_POPULAR_REPOS_SUCCESS, data: json });
          } else {
            dispatch({ type: LOAD_POPULAR_REPOS_FAILURE, error: json });
          }
        });
      });
  };
}
