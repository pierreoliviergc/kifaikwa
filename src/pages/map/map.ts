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

  private testCheckboxOpen = true;
  private testCheckboxResult = {};
  private myPosition = {
    lat: null,
    lng: null,
 };

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
          lat: 0,
          lng: 0,
        },
        zoom: 15,
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

        this.map.getMyLocation().then((resp)=>{
          this.myPosition = resp.latLng;
          console.log(this.myPosition);
          this.map.setCameraTarget(this.myPosition);
          this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.myPosition.lat,
              lng: this.myPosition.lng,
            }
          })
        })



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
      }
    });
    alert.present();
  }

}
