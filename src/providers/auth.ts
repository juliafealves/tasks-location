import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private _user: Firebase.User;

  constructor(private _angularFireAuth: AngularFireAuth) {
    _angularFireAuth
      .authState
      .subscribe((user: Firebase.User) => this._user = user);
  }

  /**
   * Verify if user is logged in.
   * @returns {boolean}
   */
  get isAuthenticated(): boolean {
    return this._user !== null;
  }

  /**
   * Log in with Facebook Firebase Provider.
   * @returns {firebase.Promise<any>}
   */
  public loginWithFacebook(){
    return this
        ._angularFireAuth
        .auth
        .signInWithPopup(new Firebase.auth.FacebookAuthProvider());
  }

  /**
   * Log out in Firebase.
   * @returns {firebase.Promise<any>}
   */
  public logout(){
    return this
      ._angularFireAuth
      .auth
      .signOut();
  }
}
