import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {Empresa} from "./empresa/empresa";
@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  userLocation: [number, number] | undefined;

  constructor() {
    this.getUserLocation();
  }
  public getUserLocation(): void {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.latitude, coords.longitude];
        },
        () => {
          this.userLocation = [0, 0];
          console.log("No se ha encontrado la geolocalización");
        }
      );

  }
}
