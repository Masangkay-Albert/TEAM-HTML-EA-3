import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reganit',
  imports: [],
  templateUrl: './reganit.html',
  styleUrl: './reganit.scss',
})
export class Reganit {
name = signal ("John Raphael");
}
