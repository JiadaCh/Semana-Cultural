import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe, NgOptimizedImage} from "@angular/common";
import {Empresa} from "../empresa";
import {EmpresaService} from "../empresa.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  empresas: Empresa[] = [];

  constructor(public empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe((data: Empresa[]) => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

  deleteCategoria(id: any) {
    this.empresaService.delete(id).subscribe(res => {
      this.empresas = this.empresas.filter(cat => cat.id !== id);
      console.log('Empresa id =' + id + ' eliminada satisfactoriamente!');
    })
  }

  getText(text: string) {

    if (text.length > 20) {
      text = text.slice(0, 20) + "....";
    }
    return text;
  }

  transform(date: string | number | Date) {

    if (date) {
      let fecha = new Date(date);
      date = fecha.toLocaleDateString();

      let datePipe = new DatePipe("en-US");
      return datePipe.transform(date, "dd/MM/yyyy")
    }
    return " ";
  }
}


