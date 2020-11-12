import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  id: string;
  categoryName: string;
  playlistsList: Array<any>;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.spotify.getCategoryItem(this.id)
    .subscribe(response => {
      this.categoryName = response['name'];
    }, error => {console.log(error);});
    this.spotify.getCategoryPlaylists(this.id)
    .subscribe(response => {
      this.playlistsList = response['playlists']['items'];
    }, error => {console.log(error);});
  }

}
