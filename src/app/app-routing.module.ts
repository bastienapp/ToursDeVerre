import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectListComponent } from './pages/collect-list/collect-list.component';
import { CollectItemComponent } from './pages/collect-item/collect-item.component';

const routes: Routes = [
  { path: '', component: CollectListComponent },
  { path: 'collect/:id', component: CollectItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
