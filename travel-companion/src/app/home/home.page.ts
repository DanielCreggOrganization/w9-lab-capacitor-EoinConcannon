import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { LocationService } from '../services/location.service';
import { CameraService } from '../services/camera.service';
import { DeviceInfoService } from '../services/device-info.service';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule],
})
export class HomePage {
  capturedImage: string | undefined;
  deviceInfo: any;
  networkStatus: any;

  constructor(
    private locationService: LocationService,
    private cameraService: CameraService,
    private deviceInfoService: DeviceInfoService,
    private networkService: NetworkService
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

  async getDeviceInfo() {
    try {
      this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
      console.log('Device info:', this.deviceInfo);
    } catch (error) {
      console.error('Error getting device info', error);
    }
  }

  async getNetworkStatus() {
    try {
      this.networkStatus = await this.networkService.getNetworkStatus();
      console.log('Network status:', this.networkStatus);
    } catch (error) {
      console.error('Error getting network status', error);
    }
  }
}
