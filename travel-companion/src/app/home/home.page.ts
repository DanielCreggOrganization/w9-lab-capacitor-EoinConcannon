import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor(private locationService: LocationService) { }

  async getLocation() {
    try {
      const coords = await this.locationService.getCurrentPosition();
      console.log('Current position:', coords);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
}
