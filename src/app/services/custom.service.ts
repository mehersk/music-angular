import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  URL = 'https://music-angular-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get(this.URL+'newReleases');
  }

  getFeauredPlayLists() {
    return this.http.get(this.URL+'featuredPlayLists');
  }

  getCategories () {
    return this.http.get(this.URL+'categories');
  }
}
