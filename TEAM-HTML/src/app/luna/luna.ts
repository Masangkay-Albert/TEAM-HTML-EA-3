import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-luna',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './luna.html',
  styleUrl: './luna.scss',
})
export class Luna {
  name = signal ("Gracy Luna");
  photoPath = signal('assets/masangkay/luna/gracy.jpg');
  isDescriptionVisible = signal(false);
  description = signal(
    'Gracy Luna is a 4th-year IT student who loves the color blue, enjoys'
      +' creative activities, and could probably love her course even more '
      +'if her future workplace is at an airport.'
    );

  toggleDescription(): void {
    this.isDescriptionVisible.set(!this.isDescriptionVisible());
  }
}
