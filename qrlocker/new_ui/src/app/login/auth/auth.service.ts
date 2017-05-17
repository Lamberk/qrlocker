import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class AuthService {
  private authUrl = 'http://localhost:8000/api-token-auth/';
  constructor(private http: Http, ) {
  }

  public auth(body){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers}); // Create a request option
    let bodyString = JSON.stringify(body);
    this.http.post(this.authUrl, bodyString, options)
      .subscribe((t) => sessionStorage.token = t.json().token);
  }
}
