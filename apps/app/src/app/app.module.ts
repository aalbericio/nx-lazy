import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from '@test/lib1';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      Lib1Module
  ],
  bootstrap: [
      AppComponent
  ],
})
export class AppModule {}
