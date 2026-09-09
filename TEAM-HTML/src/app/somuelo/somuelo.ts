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
  description = signal('');
  showDescription = false;

  onShowDescription() {
    this.showDescription = true;
    this.description.set('I am a BSIT student who enjoys coding and building web applications.');
  }
}