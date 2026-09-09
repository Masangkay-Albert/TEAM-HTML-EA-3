import { Component, signal } from '@angular/core';
import { Masangkay } from './masangkay/masangkay';



import { Reganit } from './reganit/reganit'; 

@Component({
  selector: 'app-root',
  imports: [Masangkay, Reganit],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TEAM-HTML');
}
