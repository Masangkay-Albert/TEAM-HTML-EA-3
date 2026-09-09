import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-masangkay',
  imports: [],
  templateUrl: './masangkay.html',
  styleUrl: './masangkay.scss',
})

export class Masangkay {
  name = signal('John Albert');
  photoPath = signal('assets/masangkay/masangkay.jpg');
  showDescription = signal(false);
  description = signal('John Albert is a 4th year college student at De La Salle University-Dasmarinas, taking a Bachelor of Science in Information Technology.');

  toggleDescription() {
    this.showDescription.set(!this.showDescription());
  }
}
