import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/components/components.module';
import { CommonModule } from '@angular/common';
import { MyCustomRouterModule } from 'src/routes/router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCustomRouterModule,
    ComponentsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
