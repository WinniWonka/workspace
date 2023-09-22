import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const DASHBOARD_APP_URL = "http://localhost:4300/remoteEntry.js";
// const CRUD_APP_URL = "http://localhost:4400/remoteEntry.js";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: DASHBOARD_APP_URL,
        remoteName: "dashboardApp",
        exposedModule: "./DashboardModule"
      }).then((m) => {
        return m.DashboardModule;
      }).catch(err => console.log(err));
    }
  },
  // {
  //   path: 'crud',
  //   loadChildren: () => {
  //     return loadRemoteModule({
  //       remoteEntry: CRUD_APP_URL,
  //       remoteName: "crudApp",
  //       exposedModule: "./CrudModule"
  //     }).then((m) => {
  //       return m.CrudModule;
  //     }).catch(err => console.log(err));
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
