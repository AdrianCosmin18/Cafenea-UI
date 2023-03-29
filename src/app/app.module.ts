import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import {TreeModule} from "primeng/tree";
import { RightScreenComponent } from './components/right-screen/right-screen.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    RightScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    TreeModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
