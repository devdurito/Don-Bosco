import { Routes } from '@angular/router';
import { Iniciocomponent } from './iniciocomponent/iniciocomponent';
import { Nosotroscomponent } from './nosotroscomponent/nosotroscomponent';
import { Historiacomponent } from './historiacomponent/historiacomponent';
import { Publicacionescomponent } from './publicacionescomponent/publicacionescomponent';


export const routes: Routes = [
  { path: '', component: Iniciocomponent },
  { path: 'nosotros', component: Nosotroscomponent },
  { path: 'historia', component: Historiacomponent },
  { path: 'publicaciones', component: Publicacionescomponent },
  { path: '**', redirectTo: ''},
];
