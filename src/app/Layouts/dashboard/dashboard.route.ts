import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';

export default [
  {
    path: '',
    loadComponent: () => import('@layouts/dashboard/dashboard').then((m) => m.Dashboard),
  },
] as Routes;
