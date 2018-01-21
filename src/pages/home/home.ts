import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  constructor(public navCtrl: NavController) {

  }


}
