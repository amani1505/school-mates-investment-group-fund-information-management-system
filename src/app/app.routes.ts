import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layouts/dashboard/dashboard.route').then(m=> m.default),
  },
];
