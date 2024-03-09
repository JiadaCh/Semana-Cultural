import {Component, OnInit, AfterViewInit} from '@angular/core';
import { GeolocationService } from "../geolocation.service";
import {Empresa} from "../empresa/empresa";
import {EmpresaService} from "../empresa/empresa.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit{
  map: any;
  empresas:Empresa[] = [];
  constructor(
    private placeService: GeolocationService,
    private empresaService: EmpresaService
  ) {
    this.empresaService.getAll().subscribe(
      value => {
        if (value)
       this.empresas = value;

      }
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.placeService.getUserLocation();
    }, 300);

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setGeoLocation();
    }, 580);
  }
  setGeoLocation(): void {

      import('leaflet').then((L) => {
        let userLocation = this.placeService.userLocation;

        this.map = new L.Map('map').setView(userLocation && userLocation[0] !== 0 && userLocation[1] !== 0?userLocation:[36.74,-4.5], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        if (userLocation && userLocation[0] !== 0 && userLocation[1] !== 0){
          console.log(userLocation)
          L.marker(userLocation).addTo(this.map).bindPopup("<strong>Tu ubicación<strong>").openPopup();
        }

        for (let empresa of this.empresas){
          L.marker([empresa.latitud,empresa.longitud]).addTo(this.map).bindPopup(
            '<a href="'+empresa.web+'" >' +
            '<div><img src="'+empresa.imagen+'" width="250px" alt="logo"></div>' +
            '<h2 >'+empresa.nombre+'('+empresa.anoFundacion+')</h2>' +
            '</a> ' +
            '<details open><summary>Descripcion</summary> ' +
            '<div>'+empresa.descripcion+'</div>' +
            '</details>');
        }

      });

  }



}

