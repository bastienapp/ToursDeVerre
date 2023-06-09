import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectListComponent } from './pages/collect-list/collect-list.component';
import { CollectItemComponent } from './pages/collect-item/collect-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectListComponent,
    CollectItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
