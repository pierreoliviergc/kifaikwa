import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailEventPage} from '../detail-event/detail-event';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  addEvent() {
    this.navCtrl.push(DetailEventPage);
  }

}
