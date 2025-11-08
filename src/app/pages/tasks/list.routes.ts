import { Routes } from '@angular/router';
import { ListComponent } from './../tasks/list/list.component';
import { DetailsComponent } from './../tasks/details/details.component';
export const TASK_ROUTES: Routes = [
  { path: '', component: ListComponent },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
];
