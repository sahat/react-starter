import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import ReactPaginate from 'react-paginate';

// Actions
import { loadPopularRepos } from '../Pagination/actions';

// Components
import FetchError from '../../../components/FetchError';

export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    const selectedPage = this.props.location.query.page;
    this.props.dispatch(loadPopularRepos(selectedPage));
  }

  handlePageClick(data) {
    const selectedPage = data.selected + 1;

    browserHistory.push({
      pathname: this.props.location.pathname,
      query: { page: selectedPage }
    });

    this.props.dispatch(loadPopularRepos(selectedPage));
  }

  render() {
    const { location, data, totalPages, errorMessage } = this.props;
    const initialPage = location.query.page ? location.query.page - 1 : 0;

    return (
      <div className="container">
        <Helmet title="Pagination" />
        <div className="m-t-2 m-b-2">
          <Link to="/examples">← Go back</Link>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">app</li>
          <li className="breadcrumb-item">containers</li>
          <li className="breadcrumb-item">ExamplesPage</li>
          <li className="breadcrumb-item">PaginationUrl</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>
        <p>
          This is really the same as the basic pagination example. It's even using the same Redux actions and reducer. The main difference here is URL will change when you navigate between pages. Additionally,
          passing a page (e.g. <code>?page=5</code>) to the URL will automatically fetch data for the corresponding page as you would expect.
        </p>
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>Repository</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Issues</th>
            </tr>
          </thead>
          <tbody>
            {data.map((repo) =>
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.stargazers_count}</td>
                <td>{repo.forks_count}</td>
                <td>{repo.open_issues}</td>
              </tr>
            )}
          </tbody>
        </table>
        <FetchError message={errorMessage} />
        <ReactPaginate
          previousLabel="«"
          nextLabel="»"
          breakLabel={<span className="page-link">...</span>}
          pageNum={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          initialSelected={initialPage}
          clickCallback={this.handlePageClick}
          containerClassName="pagination"
          breakClassName="page-item"
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  location: PropTypes.object,
  data: PropTypes.array,
  totalPages: PropTypes.number,
  errorMessage: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  data: state.pagination.data,
  totalPages: state.pagination.totalPages,
  errorMessage: state.pagination.errorMessage
});

export default connect(mapStateToProps)(Pagination);
