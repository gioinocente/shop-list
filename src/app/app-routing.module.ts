import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncludeComponent } from './views/include/include.component';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'include', component: IncludeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }