import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MusicDetailsComponent } from './music/music-details/music-details.component';
import { MusicFooterComponent } from './music/music-footer/music-footer.component';
import { MusicSearchComponent } from './music/music-search/music-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
