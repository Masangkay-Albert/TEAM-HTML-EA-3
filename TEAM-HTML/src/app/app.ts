import { Component, signal } from '@angular/core';
import { Luna } from './luna/luna'; 
import { Masangkay } from './masangkay/masangkay';

@Component({
  selector: 'app-root',
  imports: [Masangkay, Luna],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TEAM-HTML');
}
