import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reganit',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './reganit.html',
  styleUrl: './reganit.scss',
})
export class Reganit {
  name = signal ("John Raphael");
  photoPath = signal('assets/reganit/reganit.png');
  showDescription = signal(false);
  description = signal('John Raphael Reganit is a 4th-year IT student, an avid reader studying towards a Bachelor of Science in Information Technology.');

  toggleDescription() {
    this.showDescription.set(!this.showDescription());
  }
}
