import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class QrService {
  private qrUrl = 'http://localhost:8000/qr/';

  constructor(private http: AuthHttp,
  ) {}

  public getQr() {
    return this.http.get(this.qrUrl);
  }
}
