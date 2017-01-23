import { Injectable, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH_CONFIG } from './auth.config';

import { CookieService } from 'angular2-cookie/services/cookies.service';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  private nameKey = 'rp_user_profile_name';

  userName: string;

  private lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
    oidcConformant: true,
    autoclose: true,
    auth: {
      redirectUri: AUTH_CONFIG.callbackURL,
      responseType: 'token id_token',
      audience: `https://${AUTH_CONFIG.domain}/userinfo`
    }
  });

  constructor(private cookie: CookieService) {
    this.userName = cookie.get(this.nameKey);
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
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.cookie.remove(this.nameKey);
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
      if (profile) {
        self.cookie.put(self.nameKey, profile.name);
        self.userName = profile.name;
      }
    });
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}
