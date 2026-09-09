import { Component, signal } from '@angular/core';
import { Luna } from './luna/luna'; 
import { Masangkay } from './masangkay/masangkay';
import { Saluta } from './saluta/saluta';
import { Reganit } from './reganit/reganit';

@Component({
  selector: 'app-root',
  imports: [Masangkay, Luna, Saluta, Reganit],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TEAM-HTML');
}
