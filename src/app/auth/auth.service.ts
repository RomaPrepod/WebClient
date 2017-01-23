import { Injectable, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH_CONFIG } from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  private lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
    oidcConformant: true,
    autoclose: true,
    auth: {
      redirectUrl: AUTH_CONFIG.callbackURL,
      responseType: 'token id_token',
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    }
  });

  userName: string;

  constructor() {
    this.userName = localStorage.getItem('user_name');
    if (!this.userName) {
      this.logout();
    }
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired();
  }

  public login(): void {
    this.lock.show();
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_name');
  }

  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setUser(authResult);
        this.getProfile(authResult.accessToken);
      } else if (authResult && authResult.error) {
        alert(`Error: ${authResult.error}`);
      }
    });
  }

  private getProfile(accessToken: string) {
    const self = this;
    this.lock.getUserInfo(accessToken, function (err, profile) {
      if (profile && profile.name) {
        localStorage.setItem('user_name', profile.name);
        self.userName = profile.name;
      }
    });
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}
