import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-iniciocomponent',
  styleUrl: './iniciocomponent.css',
  templateUrl: './iniciocomponent.html',
})
export class Iniciocomponent {
  constructor(private router: Router) {}

  irAnosotros(): void {
    this.router.navigate(['/nosotros']);
  }

  irAContactos(): void {
    this.router.navigate(['/contacto']);
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
