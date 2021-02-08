import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'default', // child route path
        component: DefaultComponent, // child route component that the router renders
      },
      {
        path: 'account', // child route path
        component: AccountComponent, // child route component that the router renders
      },
      {
        path: 'syllabus', // child route path
        component: SyllabusComponent, // child route component that the router renders
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
