import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './crud/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'crud/index', pathMatch: 'full' },
  { path: 'crud/index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
