import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FilterdataComponent } from './filterdata/filterdata.component';
import { MovieidComponent } from './movieid/movieid.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    FilterdataComponent,
    MovieidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
