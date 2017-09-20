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

  ionViewWillEnter(){
    if(this._authProvider.isAuthenticated){
      this.navController.setRoot(HomePage);
    }
  }

  /**
   * Log in with Facebook
   */
  public loginFacebook(){
    this
      ._authProvider
      .loginWithFacebook()
      .then(user => this.navController.setRoot(HomePage));
  }
}
