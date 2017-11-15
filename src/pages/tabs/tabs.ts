import { Component } from '@angular/core';

import { SchedualePage } from '../scheduale/scheduale';
import { SpeakersPage } from '../speakers/speakers';
import { MapPage } from '../map/map';
import { AboutPage } from '../about/about';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedualePage;
  tab2Root = SpeakersPage;
  tab3Root = MapPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
