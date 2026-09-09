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
}
