import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {AppState} from './app.service';
import {AuthService} from "./login/auth/auth.service";

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(public appState: AppState,
              private authService: AuthService) {
  }

  public ngOnInit() {
  }

  public logout(){
    this.authService.logout();
  }
}
