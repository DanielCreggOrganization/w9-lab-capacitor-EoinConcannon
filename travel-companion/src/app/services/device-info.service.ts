import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  constructor() { }

  async getDeviceInfo() {
    // YOUR CODE HERE
    try {
      const info = await Device.getInfo();
      return info;
    } catch (error) {
      console.error('Error getting device info', error);
      throw error;
    }
  }
}