import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Router} from "@angular/router";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  private authUrl = 'http://localhost:8000/api-token-auth/';

  constructor(private http: Http, private router: Router) {
  }

  public auth(user) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers}); // Create a request option
    let bodyString = JSON.stringify(user);
    this.http.post(this.authUrl, bodyString, options)
      .subscribe((t) => sessionStorage.token = t.json().token);
  }

  public logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public loggedIn() {
    return tokenNotExpired();
  }
}
