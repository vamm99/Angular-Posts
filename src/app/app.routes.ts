import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { PostsComponent } from './components/posts/posts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'Dashboard',
                component: DashboardComponent,
                title: 'Dashboard'
            },
            {
                path: 'postList',
                component: PostsComponent,
                title: 'Lista de posts'
            },
            {
                path: '',
                redirectTo: 'Dashboard',
                pathMatch: 'full'

            }
        ]
    },
    {
        path: '**',
        redirectTo: 'Dashboard'
    }

];
