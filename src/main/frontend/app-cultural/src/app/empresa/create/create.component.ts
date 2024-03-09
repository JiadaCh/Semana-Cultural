import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {EmpresaService} from "../empresa.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
    direccion: new FormControl('', [Validators.required]),
    web: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', Validators.maxLength(245)),
    anoFundacion: new FormControl('', [Validators.max(new Date().getFullYear())]),
    ultimaActualizacion: new FormControl(this.getDate(), [Validators.required]),
    latitud: new FormControl('',[Validators.required]),
    longitud: new FormControl('',[Validators.required])
  });

  constructor(
    public empresaService: EmpresaService,
    private router: Router
  ) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.form.value);
    this.empresaService.create(this.form.value).subscribe(res => {
      console.log('Empresa creada correctamente! + res');
      this.router.navigateByUrl('empresa/index').then();
    })
  }

  getDate() {
    return new Date().toLocaleDateString().replaceAll("/", "-") + "-" + new Date().toLocaleTimeString();
  }

}

