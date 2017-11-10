var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SchedualePage } from '../pages/scheduale/scheduale';
import { SpeakersPage } from '../pages/speakers/speakers';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBNu1oz4MZpAw2TWfauVT4QMCEJ5fcMgfs",
    authDomain: "con-app-f4c78.firebaseapp.com",
    databaseURL: "https://con-app-f4c78.firebaseio.com",
    projectId: "con-app-f4c78",
    storageBucket: "con-app-f4c78.appspot.com",
    messagingSenderId: "108289057412"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                SchedualePage,
                SpeakersPage,
                MapPage,
                AboutPage,
                ProfilePage,
                TabsPage
            ],
            imports: [
                BrowserModule, HttpModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireDatabaseModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                SchedualePage,
                SpeakersPage,
                MapPage,
                AboutPage,
                ProfilePage,
                TabsPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                FirebaseProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map