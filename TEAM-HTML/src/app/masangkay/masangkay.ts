import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-masangkay',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './masangkay.html',
  styleUrl: './masangkay.scss',
})

export class Masangkay {
  name = signal('John Albert');
  photoPath = signal('assets/masangkay/masangkay.jpg');
  isDescriptionVisible = signal(false);
  description = signal(
    'John Albert is a 4th year college student at De La Salle University'
      + '-Dasmarinas, taking a Bachelor of Science in Information Technology.'
  );

    toggleDescription(): void {
    this.isDescriptionVisible.set(!this.isDescriptionVisible());
  }
}
