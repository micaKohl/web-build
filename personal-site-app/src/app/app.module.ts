import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyMaterialModule } from './material.modules';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
