var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { ProfilePage } from '../profile/profile';
var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(navCtrl, navParams, firePro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firePro = firePro;
        this.allSpeakers = this.firePro.getAllSpeakers();
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpeakersPage');
    };
    // redirect to profile page
    SpeakersPage.prototype.showSpeaker = function (speaker_id) {
        this.navCtrl.push(ProfilePage, { id: speaker_id });
    };
    SpeakersPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-speakers',
            templateUrl: 'speakers.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, FirebaseProvider])
    ], SpeakersPage);
    return SpeakersPage;
}());
export { SpeakersPage };
//# sourceMappingURL=speakers.js.map