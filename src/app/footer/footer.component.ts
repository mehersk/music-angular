import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tempList: Array<any>;
  newReleasesList: Array<string> = ["Holy", "Diamonds", "High & Dry", "Hot Stuff", "folklore", "Nobody's Love", "Take You Dancing", "supercuts", "UN DIA (ONE DAY) (Feat. Tainy)", "PEACE", "Coño", "Slow Grenade", "Wash Us In The Blood", "Chromatica", "TKN (feat. Travis Scott)", "Golden Hour", "Dark", "Together", "Fallin'"];

  featuredList: Array<string> = ["Shubh Night", "REM sleep", "Nidra", "Iniya Iravu", "Jaamu Rathiri...", "Chill Station", "Bolly Melancholy", "Tuteya Dil", "Kolly Melancholy", "Tolly Melancholy", "Marathi Sad Songs", "Sad Indie Bops", "Raaja Rules 90s", "Ghazal Gulfam"];

  categoriesList: Array<string> = ["Top Lists", "At Home", "Pop", "RADAR", "Wellness", "Bollywood", "Diwali", "Romance", "Punjabi", "Party", "Tamil", "Indie", "Telugu", "Marathi", "Summer", "Dance/Electronic", "Hip Hop", "R&B", "Tastemakers", "Rock"];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe(response => {
      this.tempList = response['albums']['items'];
      var tArray = new Array();
      for (var temp of this.tempList) {
        tArray.push(temp.name);
      }
      this.newReleasesList = tArray;
    }, error => console.log(error));

    this.spotify.getFeauredPlayLists().subscribe(response => {
      this.tempList = response['playlists']['items'];
      var tArray = new Array();
      for (var temp of this.tempList) {
        tArray.push(temp.name);
      }
      this.featuredList = tArray;
    }, error => {console.log(error);});

    this.spotify.getCategories().subscribe(response => {
      this.tempList = response['categories']['items'];
      var tArray = new Array();
      for (var temp of this.tempList) {
        tArray.push(temp.name);
      }
      this.categoriesList = tArray;
    }, error => {console.log(error);});

    // this.spotify.getAvaliableGenreSeeds().subscribe(response => {}, error => {console.log(error);});
  }

}
