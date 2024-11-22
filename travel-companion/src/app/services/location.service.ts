import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  async getCurrentPosition() {
    // YOUR CODE HERE
    try {
      const position = await Geolocation.getCurrentPosition();
      return position.coords;
    } catch (error) {
      console.error('Error getting location', error);
      throw error;
    }
  }
}