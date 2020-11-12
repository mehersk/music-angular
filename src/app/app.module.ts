import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpotifyService } from './services/spotify.service';
import { DisplayMusicComponent } from './display-music/display-music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { CategoryItemComponent } from './category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayMusicComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MusicItemComponent,
    PlaylistItemComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
