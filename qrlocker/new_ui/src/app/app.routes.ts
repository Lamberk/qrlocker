import { Routes } from '@angular/router';
import { TaskComponent } from './task';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'task',  component: TaskComponent },
  // { path: '**',    component: NoContentComponent },
];
