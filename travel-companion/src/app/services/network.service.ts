import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  constructor() { }

  async getNetworkStatus() {
    try {
      const status = await Network.getStatus();
      return status;
    } catch (error) {
      console.error('Error getting network status', error);
      throw error;
    }
  }
}