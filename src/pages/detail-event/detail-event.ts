import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-event',
  templateUrl: 'detail-event.html',
})
export class DetailEventPage {

  public eventDetails = [
    {
      img: "https://www.w3schools.com/w3css/img_fjords.jpg",
      artiste: "Marty McFly",
      date: "November 5, 1955",
      description: "Voici le contenu de l'evenement hohohohohohhoh",
      status: "md-checkmark",
      buttonColor: "#000"
    },
    {
      img: "https://www.w3schools.com/w3css/img_fjords.jpg",
      artiste: "Sabrina Barouche",
      date: "Septembre 5, 1955",
      description: "Second Voici le contenu de l'evenement hohohohohohhoh",
      status: "md-checkmark",
      buttonColor: "#000"
    },
    {
      img: "https://www.w3schools.com/w3css/img_fjords.jpg",
      artiste: "Pierre McFly",
      date: "Decembre 5, 1955",
      description: "Third voici le contenu de l'evenement hohohohohohhoh",
      status: "md-checkmark",
      buttonColor: "#000"
    },
    {
      img: "https://www.w3schools.com/w3css/img_fjords.jpg",
      artiste: "Marty McFly",
      date: "Janvier 5, 1955",
      description: "Fifth Voici le contenu de l'evenement hohohohohohhoh",
      status: "md-checkmark",
      buttonColor: "#000"
    },
    {
      img: "https://www.w3schools.com/w3css/img_fjords.jpg",
      artiste: "Marty McFly",
      date: "Janvier 5, 1955",
      description: "Fifth Voici le contenu de l'evenement hohohohohohhoh",
      status: "md-checkmark",
      buttonColor: "#000"
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEventPage');
  }

  buttonClicked(detail)
  {
    if (detail.status === "md-checkmark")
    {
      detail.status = "md-close";
      detail.buttonColor="#fff";  //marche pas
    }
    else
    {
      detail.status = "md-checkmark";
      detail.buttonColor="#fff";  //marche pas
    }
  }

}
