import { Routes } from '@angular/router';
import { HomeScreen } from './screens/home-screen/home-screen';
import { DocumentacionScreen } from './screens/documentacion-screen/documentacion-screen';
import { PerfilScreen } from './screens/perfil-screen/perfil-screen';

export const routes: Routes = [
  {path: '', component: HomeScreen, pathMatch: 'full'},
  {path: 'documentacion', component: DocumentacionScreen, pathMatch: 'full'},
  {path: 'perfil', component: PerfilScreen, pathMatch: 'full'},
];
