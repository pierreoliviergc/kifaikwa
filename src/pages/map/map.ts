import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    console.log('Map is loading');
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 37.4241904,
          lng: -122.0809802
        },
        zoom: 18,
        tilt: 0,
      },
    };


    this.map = GoogleMaps.create('map', mapOptions);
    this.map.setMapTypeId('MAP_TYPE_ROADMAP');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 37.4241904,
              lng: -122.0809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }

  sharePosition()
  {

      this.showCheckbox();

  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Partager la position avec');

    alert.addInput({
      type: 'checkbox',
      label: 'Aladin Dorine',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Papi poulette',
      value: 'value2'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Sandra Isabelle',
      value: 'value2'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Pierre Olivier',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}
