import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	speakers: object[];
  speaker: any;
	name;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public firePro: FirebaseProvider) {
  	this.name = this.navParams.get('name');
  	this.speakers = this.firePro.getAllSpeakers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
