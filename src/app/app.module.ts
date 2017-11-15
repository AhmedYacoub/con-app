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
import { DatabaseProvider } from '../providers/database/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNu1oz4MZpAw2TWfauVT4QMCEJ5fcMgfs",
  authDomain: "con-app-f4c78.firebaseapp.com",
  databaseURL: "https://con-app-f4c78.firebaseio.com",
  projectId: "con-app-f4c78",
  storageBucket: "con-app-f4c78.appspot.com",
  messagingSenderId: "108289057412"
};

@NgModule({
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
    BrowserModule,HttpModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
