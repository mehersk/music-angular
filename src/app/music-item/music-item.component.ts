import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {

  id: string;

  albumType: string;
  artists: Array<string>;
  image: string;
  albumName: string;
  popularity: number;
  releaseDate: string;
  totalNoTracks: number;
  tracksList: Array<any>;
  tempArr: Array<any>;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.spotify.getAlbumDetails(this.id)
    .subscribe(response => {
      console.log(response);
      this.albumType = response['album_type'];
      this.artists = response['artists'];
      this.tempArr = response['images'][1];
      this.image = this.tempArr['url'];
      this.albumName = response['name'];
      this.popularity = response['popularity'];
      this.releaseDate = response['release_date'];
      this.totalNoTracks = response['total_tracks'];
      this.tracksList = response['tracks']['items'];
      console.log(this.tracksList);
    }, error => {console.log(error);});
  }

}
