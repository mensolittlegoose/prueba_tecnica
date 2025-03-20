import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'listado',
    loadComponent: () => import('./listado/listado.page').then( m => m.ListadoPage)
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.page').then( m => m.SkillsPage)
  },
  {
    path: 'listado',
    loadComponent: () => import('./listado/listado.page').then( m => m.ListadoPage)
  },
];
