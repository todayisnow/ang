import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroLiteComponent } from './hero-lite.component';
import {ProductsComponent} from './products/products.component';
import {HeroDetailGuard} from './hero-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, data: {title:'MyData'} },
    { path: 'detail/:id',canActivate:[HeroDetailGuard], component: HeroLiteComponent },
    { path: 'heroes', component: HeroesComponent },
	{ path: 'products', component: ProductsComponent },
    //{ path: ** , component:PageNotFoundComponent }  //wildcard route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }