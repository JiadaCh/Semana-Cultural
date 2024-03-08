import {Component, OnInit} from '@angular/core';
import {Empresa} from "../empresa";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {EmpresaService} from "../empresa.service";

import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  id: number = 0;
  empresa: Empresa = {
    descripcion: "",
    direccion: "",
    id: 0,
    imagen: "",
    nombre: "",
    ultimaActualizacion: "",
    web: "",
    anoFundacion: new Date().getFullYear()
  };
  form: FormGroup = new FormGroup({
    id: new FormControl(""),
    nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
    direccion: new FormControl('', [Validators.required]),
    web: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', Validators.maxLength(245)),
    anoFundacion: new FormControl('', Validators.max(new Date().getFullYear())),
    ultimaActualizacion: new FormControl(this.getDate(), [Validators.required]),
  });

  constructor(
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idEmpresa'];
    this.empresaService.find(this.id).subscribe((data: Empresa) => {
      this.empresa = data;
      this.form.get('id')?.setValue(this.id);
      this.form.get('nombre')?.setValue(this.empresa.nombre);
      this.form.get('descripcion')?.setValue(this.empresa.descripcion);
      this.form.get('direccion')?.setValue(this.empresa.direccion);
      this.form.get('imagen')?.setValue(this.empresa.imagen);
      this.form.get('web')?.setValue(this.empresa.web);
      this.form.get('anoFundacion')?.setValue(this.empresa.anoFundacion);

    });
  }

  submit() {
    console.log(this.form.value);
    this.empresaService.update(this.id, this.form.value).subscribe(res => {
      console.log('Empresa actualizada satisfactoriamente!');
      this.router.navigateByUrl('empresa/index').then();
    })
  }

  getDate() {
    return new Date().toLocaleDateString().replaceAll("/", "-") + "-" + new Date().toLocaleTimeString();
  }
}

