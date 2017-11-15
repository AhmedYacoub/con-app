import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: FirebaseListObservable<any[]>;
  longitude: any;
  latitude: any;
  zoom: any;
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firePro: FirebaseProvider) {
    // get map longitude, latitude and zoom
    this.map = this.firePro.getMapLocation();
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(25.2199095, 55.3431537);
    const options = {
      center: location,
      zoom: 10
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  

}
