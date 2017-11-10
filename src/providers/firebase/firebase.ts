import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  // return all schedules
  getAllSchedule() {
  	return this.afd.list('/schedule/');
  }

  // return all speakers
  getAllSpeakers() {
  	return this.afd.list('/speaker/'); 
  }

  // Add an item
  // addItem(item) {
  // 	this.afd.list('/schedule/').push({
  // 		id: '',
  // 		title: ''
  // 	}).then( () => {

  // 	}).catch( () => {

  // 	});
  // }

  // Remove an itme

}
