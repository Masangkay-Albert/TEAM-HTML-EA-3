import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-somuelo',
  imports: [],
  templateUrl: './somuelo.html',
  styleUrl: './somuelo.scss',
})
export class Somuelo {
  name = signal('Somuelo');
  imagePath = signal('assets/somuelo/somuelo.jpg');
}
