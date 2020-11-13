import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomService } from '../services/custom.service';
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

  constructor(private spotify: SpotifyService, private custom: CustomService) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe(response => {
      this.newReleasesList = response['albums']['items'];
    }, error => {
      this.custom.getNewReleases().subscribe(cresponse => {
        this.newReleasesList = cresponse['albums']['items'];
      }, cerror => {console.log(cerror);});
    });

    this.spotify.getFeauredPlayLists().subscribe(response => {
      this.featuredList = response['playlists']['items'];
    }, error => {
      this.custom.getFeauredPlayLists().subscribe(cresponse => {
        this.featuredList = cresponse['playlists']['items'];
      }, cerror => {console.log(cerror);})
    });

    this.spotify.getCategories().subscribe(response => {
      console.log(response);
      this.categoriesList = response['categories']['items'];
    }, error => {
      this.custom.getCategories().subscribe(cresponse => {
        this.categoriesList = cresponse['categories']['items'];
      }, cerror => {console.log(cerror);})
    });
    
  }

}
