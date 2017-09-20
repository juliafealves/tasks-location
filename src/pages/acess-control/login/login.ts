import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth';
import { HomePage } from '../../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private _authProvider: AuthProvider,
              public navController: NavController,
              public navParams: NavParams) {

  }

  /**
   * Log in with Facebook
   */
  public loginFacebook(){
    this
      ._authProvider
      .loginWithFacebook()
      .then(user => this.navController.push(HomePage));
  }

  /**
   * Log out of the user.
   */
  public logout() {
    this
      ._authProvider
      .logout();
  }
}
