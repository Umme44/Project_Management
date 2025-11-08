import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

export const PROJECT_ROUTES: Routes = [
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
