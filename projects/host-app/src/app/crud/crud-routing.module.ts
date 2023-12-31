import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'crud', redirectTo: 'crud/index', pathMatch: 'full' },
  { path: 'crud/index', component: IndexComponent },
  { path: 'crud/:postId/view', component: ViewComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/:postId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
