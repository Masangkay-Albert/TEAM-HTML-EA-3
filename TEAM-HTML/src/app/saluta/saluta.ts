import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-saluta',
  
  imports: [],
  templateUrl: './saluta.html',
  styleUrl: './saluta.scss',
})
export class Saluta {
  name = signal('James Saluta');
   photoPath = signal('assets/masangkay/saluta/james2.jpg');
   showDescription = signal(false);
  description = signal('James Saluta is a 4th-year IT student who loves r to design web pages.');

  toggleDescription() {
    this.showDescription.set(!this.showDescription());
  }
}
