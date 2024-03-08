import {Routes} from "@angular/router";
import {EditComponent} from "./empresa/edit/edit.component";
import {CreateComponent} from "./empresa/create/create.component";
import {IndexComponent} from "./empresa/index/index.component";


export const routeConfig: Routes = [
  {path: 'empresa', redirectTo: 'empresa/index', pathMatch: 'full'},
  {path: 'empresa/index', component: IndexComponent, title: 'Empresas'},
  {path: 'empresa/create', component: CreateComponent, title: 'Crear Empresa'},
  {path: 'empresa/edit/:idEmpresa', component: EditComponent, title: 'Empresa'}
];
