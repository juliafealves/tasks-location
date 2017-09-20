import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private _authProvider: AuthProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {

  }

  /**
   * Log in with Facebook
   */
  public loginFacebook(){
    this
      ._authProvider
      .loginWithFacebook();
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
