import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@IonicPage() 
@Component({
  selector: 'page-scheduale',
  templateUrl: 'scheduale.html',
})
export class SchedualePage {
	allSchedules: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firePro: FirebaseProvider) {
  	// get all schedules from firebase
    this.allSchedules = this.firePro.getAllSchedule();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedualePage');
  }

}
