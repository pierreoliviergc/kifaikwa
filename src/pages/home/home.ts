import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cards = [
    {
      title: "Festival de Jazz",
      listing: 108,
      img: "https://i.imgur.com/mYkMcRQ.jpg",
      nContact: 2
    },
    {
      title: "Francofolie",
      listing: 93,
      img: "https://i.imgur.com/ydi5jMh.jpg",
      nContact: 1
    },
    {
      title: "Picnik Electronique",
      listing: 140,
      img: "https://i.imgur.com/a5lKqbm.jpg",
      nContact: 3
    },
    {
      title: "Festival de Jazz",
      listing: 108,
      img: "https://i.imgur.com/mYkMcRQ.jpg",
      nContact: 0
    },
    {
      title: "Festival de Jazz",
      listing: 108,
      img: "https://i.imgur.com/mYkMcRQ.jpg",
      nContact: 1
    },

  ];

  constructor(public navCtrl: NavController) {

  }


}
