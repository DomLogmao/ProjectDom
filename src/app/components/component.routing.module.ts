import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './dashboard/content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
// import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'content',
                pathMatch: 'full'
            },

            {
                path: 'content',
                component: ContentComponent,
                // canActivate: [AuthGuard]
            },
            {
                path: 'product',
                component: ProductsComponent,
                // canActivate: [AuthGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ComponentRouteModule { }
