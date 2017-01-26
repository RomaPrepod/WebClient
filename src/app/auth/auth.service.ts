import { Injectable, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

const authConfig = require('./auth.config.json');

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  private lock = new Auth0Lock(authConfig.clientID, authConfig.domain, {
    autoclose: true,
    auth: {
      redirectUrl: authConfig.callbackURL,
      responseType: 'token id_token',
      audience: `https://${authConfig.domain}/userinfo`,
      params: {
        scope: 'openid email name picture groups roles'
      }
    }
  });

  constructor() {
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
  }

  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
      } else if (authResult && authResult.error) {
        alert(`Error: ${authResult.error}`);
      }
    });
  }
}
