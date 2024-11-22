import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { LocationService } from '../services/location.service';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  capturedImage: string | undefined;

  constructor(
    private locationService: LocationService,
    private cameraService: CameraService
  ) { }

  async getLocation() {
    try {
      const coords = await this.locationService.getCurrentPosition();
      console.log('Current position:', coords);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  async takePicture() {
    try {
      this.capturedImage = await this.cameraService.takePicture();
      console.log('Captured image:', this.capturedImage);
    } catch (error) {
      console.error('Error taking picture', error);
    }
  }
}
