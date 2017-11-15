import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider }  from '../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  about: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public firePro: FirebaseProvider) {
    this.about = this.firePro.getAbout();
  }

}
