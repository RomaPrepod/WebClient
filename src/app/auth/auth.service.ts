import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private _currentUser: UserInfo;
  private _isAuthenticated: boolean;

  get currentUser(): UserInfo {
    return this._currentUser;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  constructor(private af: AngularFire,
              private router: Router) {
    this.af.auth.subscribe((state: FirebaseAuthState) => {
      this._isAuthenticated = !!(state && state.uid);

      this._currentUser = this._isAuthenticated
        ? AuthService.getProviderData(state)
        : null;
    });
  }

  private static getProviderData(state: FirebaseAuthState): UserInfo {
    return state.auth.providerData[0];
  }

  signInWithGitHub(): void {
    this.af.auth
      .login({
        provider: AuthProviders.Github,
        method: AuthMethods.Popup
      });
  }

  signOut(): void {
    this.af.auth
      .logout()
      .then(() => {
        this.router.navigateByUrl('');
      });
  }

}

export interface UserInfo {
  displayName: string;
  photoURL: string;
}
