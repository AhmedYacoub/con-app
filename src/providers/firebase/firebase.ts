import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
     
  }

  // return all schedules
  getAllSchedule() {
  	return this.afd.list('/schedule/'); 
  }

  // return all speakers
  getAllSpeakers() {
  	return this.afd.list('/speaker/'); 
  }

  getMapLocation() {
    return this.afd.list('/map_location/');
  }

  getAbout() {
    return this.afd.list('/about_conference/');
  }
}
