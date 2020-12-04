import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class DataTableModule {}

