import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { EventPage } from '../event/event';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = MapPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
