import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';

import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {
	allSpeakers: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firePro: FirebaseProvider) {
  	this.allSpeakers = this.firePro.getAllSpeakers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
  }

  // redirect to profile page
  showSpeaker(speaker_name) {
  	this.navCtrl.push(ProfilePage, {name: speaker_name});
  }
}
