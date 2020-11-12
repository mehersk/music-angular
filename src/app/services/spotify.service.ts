import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenHeader: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQDM26B-PBNY7cTsZR94r2UNSgACDfG1fDMzWl91_9NOr29OmU4eWYtnJGtRUpvllypZ7fXkhDNj0Vq1NaMZJTkwEjbbXKRYjWYvxynzHenC93RQAcHZyBDpxYkr9tG-ptHaM0oFXStAJK08FY0-q1tYkdLjWlsCiZiyC9m_p62W7WjPHT1QKmqg-evp67424Ck0t4_dQQKDVn0qG5wBHk3MRFv1Ihl03VG19Up8yfIF-3ywMHvCeEOz49gGkquX-6w9logc8VnycopMT3ZFJ43Y_vUnRPhzPBM'
  });

  constructor( private http: HttpClient) { }

  getNewReleases () {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=IN', {headers: this.tokenHeader});
  }

  getFeauredPlayLists () {
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists?country=IN', {headers: this.tokenHeader});
  }

  getCategories () {
    return this.http.get('https://api.spotify.com/v1/browse/categories?country=IN', {headers: this.tokenHeader});
  }

  // getAvaliableGenreSeeds () {
  //   return this.http.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: this.tokenHeader});
  // }

  getAlbumsTracks (id) {
    return this.http.get('https://api.spotify.com/v1/albums/'+id+'/tracks', {headers: this.tokenHeader});
  }

  getAlbumDetails (id) {
    return this.http.get('https://api.spotify.com/v1/albums/'+id, {headers: this.tokenHeader});
  }

  getPlaylist (id) {
    return this.http.get('https://api.spotify.com/v1/playlists/'+id, {headers: this.tokenHeader});
  }

  getCategoryItem (id) {
    return this.http.get('https://api.spotify.com/v1/browse/categories/'+id, {headers: this.tokenHeader});
  }

  getCategoryPlaylists(id) {
    return this.http.get('https://api.spotify.com/v1/browse/categories/'+id+'/playlists', {headers: this.tokenHeader});
  }
}
