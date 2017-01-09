import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  otherLink() {
    if (this.props.formType === 'login')
      return <Link to='/signup'>Sign Up</Link>;
    else
      return <Link to='login'>Log In</Link>;
  }

  showErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div>
        <h1>{this.capitalize(formType)} or {this.otherLink()}</h1>
        <form onSubmit={this.handleSubmit}>

          {this.showErrors()}

          <label>Username:
            <input type='text'
                   onChange={this.update('username')}
                   value={this.state.username} />
          </label>

          <label>Password:
            <input type='password'
                   onChange={this.update('password')}
                   value={this.state.password} />
          </label>

          <input type='submit' value='Submit' />

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
