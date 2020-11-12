import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {

  newReleasesList: Array<any>;
  featuredList: Array<any>;
  categoriesList: Array<any>;
  gnereSeedsList: Array<any>;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  };

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe(response => {
      this.newReleasesList = response['albums']['items'];
    }, error => console.log(error));
    this.spotify.getFeauredPlayLists().subscribe(response => {
      this.featuredList = response['playlists']['items'];
    }, error => {console.log(error);});
    this.spotify.getCategories().subscribe(response => {
      console.log(response);
      this.categoriesList = response['categories']['items'];
    }, error => {console.log(error);});
    // this.spotify.getAvaliableGenreSeeds().subscribe(response => {}, error => {console.log(error);});
  }

}
