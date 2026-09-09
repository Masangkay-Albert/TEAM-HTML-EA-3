import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-masangkay',
  imports: [],
  templateUrl: './masangkay.html',
  styleUrl: './masangkay.scss',
})
export class Masangkay {
  name = signal ("John Albert");
}
