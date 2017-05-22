import {
  Component,
  OnInit
} from '@angular/core';

import {AuthService} from './auth/auth.service';
// import {NgForm} from '@angular/forms/src/forms';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './auth/auth.model';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              fb: FormBuilder) {
    this.userForm = fb.group({
      username: '',
      password: ''
    });
  }

  public ngOnInit() {
  }
  public onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
  private auth(value: string): void {
    this.authService.auth(value);
    this.router.navigate(['/task']);
  }
}
