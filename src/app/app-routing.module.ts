import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  {path: 'category', component: CategoryComponent },
  {path: 'search', component: SearchComponent},
{path: '', pathMatch: 'full', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
