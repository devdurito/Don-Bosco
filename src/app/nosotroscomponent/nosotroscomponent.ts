import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MiembroStaff {
  nombre: string;
  cargo: string;
  descripcion: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotroscomponent.html',
  styleUrls: ['./nosotroscomponent.css']
})
export class Nosotroscomponent {
  tituloPrincipal: string = 'Nuestra Institución';
  historiaTexto: string = 'Fundada bajo los principios de San Juan Bosco, la Unidad Educativa Don Bosco ha formado a generaciones de jóvenes basándose en el Sistema Preventivo: Razón, Religión y Amabilidad.';

  plantelDirectivo: MiembroStaff[] = [
    {
      nombre: 'Padre Director',
      cargo: 'Director General',
      descripcion: 'Liderando la formación pastoral, espiritual y académica de nuestra comunidad educativa.'
    },
    {
      nombre: 'Lic. María Pérez',
      cargo: 'Directora Académica',
      descripcion: 'Comprometida con la excelencia educativa y la actualización constante de planes de estudio.'
    },
    {
      nombre: 'Prof. Carlos Gómez',
      cargo: 'Coordinador de Disciplina',
      descripcion: 'Fomentando los valores salesianos, el respeto y la convivencia armónica diaria.'
    }
  ];

  valores: string[] = [
    'Fe y Alegría en el estudio',
    'Respeto mutuo y empatía',
    'Solidaridad con el prójimo',
    'Responsabilidad y honestidad'
  ];
}