import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private _authProvider: AuthProvider) {

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
