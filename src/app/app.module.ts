import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './app-material.module';
//import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

import { BlogService } from './blog/blog.service';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    //MatToolbar
     NgCircleProgressModule.forRoot()
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
