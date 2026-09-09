import { Component, signal } from '@angular/core';
import { Masangkay } from './masangkay/masangkay';

@Component({
  selector: 'app-root',
  imports: [Masangkay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TEAM-HTML');
}
