import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  navbarFixed() {
    if ($(window).scrollTop() > 290) {
      $('#header_area').addClass("fixed-top");
      $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
    }
    else {
      $('#header_area').removeClass("fixed-top");
      $('body').css('padding-top', '0');
    }
  }

}
