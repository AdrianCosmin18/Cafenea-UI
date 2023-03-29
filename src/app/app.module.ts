import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import {TreeModule} from "primeng/tree";

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        TreeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
