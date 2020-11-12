import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  id: string;
  playlistName: string;
  followers: number;
  ownerName: string;
  ownerType: string;
  image: string;
  type: string;
  description: string;
  playlistTrackList: Array<any>;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.spotify.getPlaylist(this.id)
    .subscribe(response => {
      this.playlistName = response['name'];
      this.image = response['images'][0]['url'];
      this.followers = response['followers']['total'];
      this.ownerName = response['owner']['display_name'];
      this.ownerType = response['owner']['type'];
      this.description = response['description'];
      this.type = response['type'];
      this.playlistTrackList = response['tracks']['items'];
    }, error => {console.log(error);});
    
  }

}
