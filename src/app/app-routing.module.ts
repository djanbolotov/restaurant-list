import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { PutComponent } from './put/put.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'update/:id',
    component: PutComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
