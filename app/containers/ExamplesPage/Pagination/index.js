import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';

// Actions
import { loadPopularRepos } from './actions';

// Components
import FetchError from '../../../components/FetchError';

// Styles
import './styles.css';

export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadPopularRepos());
  }

  handlePageClick(data) {
    const selectedPage = data.selected + 1;
    this.props.dispatch(loadPopularRepos(selectedPage));
  }

  render() {
    const { data, totalPages, errorMessage } = this.props;

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
          <li className="breadcrumb-item">Pagination</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>
        <h5>Dependencies used in this example</h5>
        <ul>
          <li><a href="https://www.npmjs.com/package/react-addons-create-fragment">react-addons-create-fragment</a></li>
          <li><a href="https://www.npmjs.com/package/react-paginate">react-paginate</a></li>
        </ul>
        <p>
          Below is a simple pagination example using GitHub API for fetching most popular JavaScript repositories. Unlike GitHub, many APIs do not have <a href="https://developer.github.com/v3/#pagination">built-in pagination</a> support. For those cases take a look at the <a href="https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js">official demo</a> that shows you how to use <strong>offset</strong> to fetch the next set of items.
        </p>
        <p><code>ReactPaginate</code> primarily consists of two parts:</p>
        <ul>
          <li><strong>pageNum</strong> — Total number of pages. You can have 1000s of pages but only have 10 buttons that control pagination.</li>
          <li><strong>clickCallback</strong> — Function that gets called every time you press a page button, passing currently selected page (0-based) as its parameter.</li>
        </ul>
        <p>One thing to keep in mind, pagination <u>does not</u> control your data displaying logic (e.g. table rows below). Pagination component is only responsible for tracking currently selected page. It is up to you to fetch corresponding data, while knowing <strong>total number of items</strong>, <strong>total number of pages</strong> (<em>total count</em> divided by <em>items displayed per page</em>) and <strong>current page</strong>. Using this information you can query an API for the next set of items.</p>
        <p className="bg-faded p-a-1">
          <strong>Note:</strong> Depending on your use case, consider caching page results. <a href="https://github.com/cloudmu/react-redux-starter-kit/blob/master/src/actions/repos.js#L66">This boilerplate repository</a> seems to be storing paginated data in an object where each key is a page number. For more advanced use case where data can change, see
          <a href="http://programmers.stackexchange.com/questions/190149/what-are-best-practices-for-caching-paginated-results-whose-ordering-properties"> this thread</a> on Programmer's Exchange. Also, consider adding a loading indicator while data is being fetched.
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
