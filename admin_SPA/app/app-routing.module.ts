import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewComponent }      from './add-new.component';
import { CategoryComponent }      from './category.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  {
    path: 'add-new-form',
    component: AddNewComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}