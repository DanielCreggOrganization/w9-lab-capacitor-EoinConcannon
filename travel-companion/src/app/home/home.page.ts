import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LocationService } from '../services/location.service';
import { CameraService } from '../services/camera.service';
import { DeviceInfoService } from '../services/device-info.service';
import { NetworkService } from '../services/network.service';
import { TextToSpeechService } from '../services/text-to-speech.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HomePage {
  capturedImage: string | undefined;
  deviceInfo: any;
  networkStatus: any;

  constructor(
    private locationService: LocationService,
    private cameraService: CameraService,
    private deviceInfoService: DeviceInfoService,
    private networkService: NetworkService,
    private textToSpeechService: TextToSpeechService
  ) {
    // Camera Testing
    navigator.mediaDevices.addEventListener('devicechange', () => {
      console.log('Camera devices changed');
    });

    // Geolocation Testing
    navigator.geolocation.watchPosition((position) => {
      console.log('New position:', position);
    });

    // Device Info Testing
    console.log({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
    });
  }

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

  async speakText(text: string) {
    try {
      await this.textToSpeechService.speak(text);
    } catch (error) {
      console.error('Error with Text to Speech', error);
    }
  }
}