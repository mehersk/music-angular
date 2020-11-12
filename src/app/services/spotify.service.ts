import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenHeader: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQA80wMlyKQZQQpTibMbxI3LzjDt4Z58at5-A_BwB1-mfptmG9_lsLDCryQiviCj-xjoxlYI9Z8QuXKfHmN4O0Xw6B3MwKMIT8-Yrz6DfncZn-e_1uau4Wb4BnOGg1bG2_WS4Ed5rTkRYIvpsQRW5Y3H8if0muCs0ay6ru9jo3GKQbt3EjV820vzcp-KtXPHJNZ5BHIAQ71NQ4C7sbcHactw-Z_BT62CxEqcw1drA5wGdJwUqy_GPhsXoRJYLIvxDHjRi7cvZ_SeUGY61Uiqf-5Yo-I2n8neMWc'
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
