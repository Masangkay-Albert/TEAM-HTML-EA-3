import { Component,signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-somuelo',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './somuelo.html',
  styleUrl: './somuelo.scss',
})
export class Somuelo {
  name = signal ("Alarie Somuelo");
  photoPath = signal('assets/somuelo.jpg');
  showDescription = signal(false);
  description = signal('Alarie Somuelo is a 4th-year IT student who loves the color blue and enjoys swimming.');

  toggleDescription() {
    this.showDescription.set(!this.showDescription());
  }
}
