import { DetailsComponent } from './../team/details/details.component';
import { ListComponent } from './../team/list/list.component';
import { Routes } from '@angular/router';
export const TEAM_ROUTES: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
];
