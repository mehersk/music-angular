import { Component, OnInit } from '@angular/core';
import { CustomService } from '../services/custom.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tempList: Array<any>;
  newReleasesList: Array<string>;
  featuredList: Array<string>;
  categoriesList: Array<string>;

  constructor(private spotify: SpotifyService, private custom: CustomService) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe(response => {
      this.tempList = response['albums']['items'];
      var tArray = new Array();
      for (var temp of this.tempList) {
        tArray.push(temp.name);
      }
      this.newReleasesList = tArray;
    }, error => {
      this.custom.getNewReleases().subscribe(cresponse => {
        this.tempList = cresponse['albums']['items'];
        var tArray = new Array();
        for (var temp of this.tempList) {
          tArray.push(temp.name);
        }
        this.newReleasesList = tArray;
      }, cerror => {console.log(cerror);});
    });

    this.spotify.getFeauredPlayLists().subscribe(response => {
      this.tempList = response['playlists']['items'];
      var tArray = new Array();
      for (var temp of this.tempList) {
        tArray.push(temp.name);
      }
      this.featuredList = tArray;
    }, error => {
      this.custom.getFeauredPlayLists().subscribe(cresponse => {
        this.tempList = cresponse['playlists']['items'];
        var tArray = new Array();
        for (var temp of this.tempList) {
          tArray.push(temp.name);
        }
        this.featuredList = tArray;
      }, cerror => {console.log(cerror);})
    });

    this.spotify.getCategories().subscribe(response => {
      this.tempList = response['categories']['items'];
      var tArray = new Array();
      for (var temp of this.tempList) {
        tArray.push(temp.name);
      }
      this.categoriesList = tArray;
    }, error => {
      this.custom.getCategories().subscribe(cresponse => {
        this.tempList = cresponse['categories']['items'];
        var tArray = new Array();
        for (var temp of this.tempList) {
          tArray.push(temp.name);
        }
        this.categoriesList = tArray;
      }, cerror => {console.log(cerror);})
    });

  }

}
