import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  //   {
  //     path: '',
  //     redirectTo: 'dashboard',
  //     pathMatch: 'full',
  //   },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/list.routes').then((m) => m.PROJECT_ROUTES),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/team/list.routes').then((m) => m.TEAM_ROUTES),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./pages/tasks/list.routes').then((m) => m.TASK_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
