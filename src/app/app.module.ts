import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, MovieComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MovieService]
})
export class AppModule { }
