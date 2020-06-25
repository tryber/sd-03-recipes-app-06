import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginAction } from '../../actions/userLoginAction';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.entrarApp = this.entrarApp.bind(this);
  }

  handleChange(e) {
    const { email, value } = e.target;
    this.setState({ [email]: value });
  }

  async entrarApp() {
    const { email, password } = this.state;
    const { userLoginDispatch } = this.props;
    userLoginDispatch(email, password);
  }

  renderForm() {
    return (
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          plasceholder="Email"
          type="text"
          data-testid=" "
          onChange={(e) => this.handleChange(e)}
          name="email"
        />
        <label htmlFor="password">Senha:</label>
        <input
          placeholder="Senha"
          onChange={(e) => this.handleChange(e)}
          name="password"
          type="password"
          data-testid=" "
        />
      </div>
    );
  }

  renderLogin() {
    const { email, password } = this.state;
    let disabled = false;
    if ((email === '' || password === '')) {
      disabled = true;
    }

    return (
      <div>
        <Link to=" ">
          <button
            type="button"
            data-testid=" "
            disabled={disabled}
            onClick={this.entrarApp}
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderLogin()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.userInfoReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginDispatch: (email) => dispatch(userLoginAction(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

LoginContainer.propTypes = {
  userLoginDispatch: PropTypes.func.isRequired,
};
