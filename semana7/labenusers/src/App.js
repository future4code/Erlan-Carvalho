import React from 'react';
import SignUp from './components/signUpScreens';
import Users from './components/screenOfUsers'


class App extends React.Component {
  state = {
    telaDeInicio: "login"
  }

  mudancaDeTela = () => {
    switch (this.state.telaDeInicio) {
      case "login":
        return <SignUp goToUsersSceen={this.ChangeOfsingUpPageToUser} />;
      case "usuarios":
        return <Users goToSignUpScreen={this.ChangeOfusersPageToSignUp} />;
      default:
        return <p>Erro!! </p>
    }
  }

  ChangeOfsingUpPageToUser = () => {
    this.setState({ telaDeInicio: 'usuarios' })
  }

  ChangeOfusersPageToSignUp = () => {
    this.setState({ telaDeInicio: 'login' })
  }

  render() {
    return (
      <div>
        {this.mudancaDeTela()}

      </div>
    );
  }
}
export default App;
