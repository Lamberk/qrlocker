import {
  Component,
  OnInit
} from '@angular/core';

import {AuthService} from './auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  public ngOnInit() {
    this.auth();
  }

  private auth() {
    let user = {
      username: 'lamberk',
      password: '123581321A'
    };
    this.authService.auth(user);

  }
}
