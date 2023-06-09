import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectListComponent } from './pages/collect-list/collect-list.component';

const routes: Routes = [
  { path: '', component: CollectListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
