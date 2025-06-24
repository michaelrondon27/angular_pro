import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic-plan',
        loadComponent: () => import('./pages/basic-plan/basic-plan.component')
    },
    {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component')
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
