import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryItemComponent } from './category-item/category-item.component';
import { DisplayMusicComponent } from './display-music/display-music.component';
import { LoginComponent } from './login/login.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayMusicComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'newRelease/:id',
    component: MusicItemComponent
  },
  {
    path: 'playlist/:id',
    component: PlaylistItemComponent
  },
  {
    path: 'category/:id',
    component: CategoryItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
