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

  buttonColor : string = '#000';
  buttonText : string = 'coucou';

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

  addEvent(title) {
    console.log(title);
    if (this.buttonColor === '#aaa')
      this.buttonColor = '#000';
    else
      this.buttonColor = '#aaa';

    this.buttonText = title;

    this.navCtrl.push(DetailEventPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
