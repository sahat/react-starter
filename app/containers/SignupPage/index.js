import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSignupSubmit(event) {
    event.preventDefault();
    // this.props.dispatch(signup(this.state.name, this.state.email, this.state.password));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSignupSubmit}>
          <legend>Create an account</legend>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <p className="text-muted">By signing up, you agree to the Terms of Service.</p>
          <button className="btn btn-success" type="submit">Create an account</button>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Signup);
