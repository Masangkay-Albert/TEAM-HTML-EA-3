import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-luna',
  imports: [],
  templateUrl: './luna.html',
  styleUrl: './luna.scss',
})
export class Luna {
  name = signal ("Gracy Luna");
  photoPath = signal('assets/masangkay/luna/gracy.jpg');
}
