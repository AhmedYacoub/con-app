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
  longitude: any;
  latitude: any;
  zoom: any;
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firePro: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(24.458416, 54.320113);
    const options = {
      center: location,
      zoom: 17
    }
    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}
