import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {EmpresaService} from "./empresa/empresa.service";
import {empresasLoad} from "./empresa/empresa";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe(
      response => {
        if (response.length <= 0) {
          const requests: any = [];
          for (let i in empresasLoad) {
            requests.push(this.empresaService.create(empresasLoad[i]));
          }
          console.log(requests)
          if (requests.length > 0) {
            forkJoin(requests).subscribe(
              () => {
                console.log('Empresas creadas automáticamente.');
              },
              error => {
                console.error('Error al crear empresas automáticamente:', error);
              }
            );
          } else {
            console.log('No se necesitan crear empresas automáticamente.');
          }
        }
      },
      error => {
        console.log('No se ha podido crear empresas .');
      }
    );
  }

}
