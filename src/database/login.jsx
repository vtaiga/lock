import React from 'react';
import Screen from '../lock/screen';
import LoginPane from './login_pane';
import { authWithUsername, hasScreen, signUpLink } from './index';
import { signInWithEmail, signInWithUsername } from './actions';
import { renderSignedInConfirmation } from '../lock/signed_in_confirmation';
import LoginSignUpTabs from './login_sign_up_tabs';

export default class Login extends Screen {

  constructor() {
    super("login");
  }

  renderAuxiliaryPane(lock) {
    return renderSignedInConfirmation(lock);
  }

  renderTabs(lock) {
    return hasScreen(lock, "signUp")
      ? <LoginSignUpTabs
          key="loginsignup"
          lock={lock}
          loginTabLabel={this.t(lock, ["loginTabLabel"], {__textOnly: true})}
          signUpLink={signUpLink(lock)}
          signUpTabLabel={this.t(lock, ["signUpTabLabel"], {__textOnly: true})}
        />
      : null;
  }

  submitHandler(lock) {
    return authWithUsername(lock) ? signInWithUsername : signInWithEmail;
  }

  render({lock}) {
    return (
      <LoginPane
        emailInputPlaceholder={this.t(lock, ["emailInputPlaceholder"], {__textOnly: true})}
        forgotPasswordLabel={this.t(lock, ["forgotPasswordLabel"], {__textOnly: true})}
        lock={lock}
        passwordInputPlaceholder={this.t(lock, ["passwordInputPlaceholder"], {__textOnly: true})}
        usernameInputPlaceholder={this.t(lock, ["usernameInputPlaceholder"], {__textOnly: true})}
      />
    );
  }

}