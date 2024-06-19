import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alfa',
    loadComponent: () => import('./alfa/alfa.page'),
  },
  {
    path: 'beta',
    loadComponent: () => import('./beta/beta.page'),
  },
];
