import { Routes } from '@angular/router';
import { PublicTemplate } from './+Pages/+public/public-template/public-template';
import { PrivateTemplate } from './+Pages/+private/private-template/private-template';
import { HomePage } from './+Pages/+public/home-page/home-page';
import { PublicProductsPage } from './+Pages/+public/public-products-page/public-products-page';
import { AboutPage } from './+Pages/+public/about-page/about-page';
import { ContactPage } from './+Pages/+public/contact-page/contact-page';
import { LoginPage } from './+Pages/+public/login-page/login-page';
import { DashboredPage } from './+Pages/+private/dashbored-page/dashbored-page';
import { PrivateProductsPage } from './+Pages/+private/private-products-page/private-products-page';
import { UsersPage } from './+Pages/+private/users-page/users-page';
import { OrderPage } from './+Pages/+private/order-page/order-page';

export const routes: Routes = [
    {path:'public',component:PublicTemplate,children:[
        {path:'home',component:HomePage},
        {path:'product',component:PublicProductsPage},
        {path:'about',component:AboutPage},
        {path:'contact',component:ContactPage},
        {path:'login',component:LoginPage},
        {path:'',redirectTo:'home',pathMatch:'prefix'},
        {path:'**',redirectTo:'home'}
    ]},
    {path:'private',component:PrivateTemplate,children:[
        {path:'dashbored',component:DashboredPage},
        {path:'product',component:PrivateProductsPage},
        {path:'users',component:UsersPage},
        {path:'order',component:OrderPage},
        {path:'',redirectTo:'dashbored',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashbored'}
    ]},
    {path:'',redirectTo:'public',pathMatch:'full'},
    {path:'**',redirectTo:'public'}
];
