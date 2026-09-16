import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MemberPreview } from '../shared/member-preview/member-preview';


@Component({
  selector: 'app-luna',
  imports: [MatCardModule, MatButtonModule, MemberPreview],
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
    
  avatarPath = signal('assets/masangkay/luna/sunnies.jpg');
  cardImagePath = signal('assets/masangkay/luna/hachiware.jpg');
  cardTitle = signal('Happy Meal Hachiware');
  cardSubtitle = signal('McDonald\'s x Chiikawa');
  cardText = 'A tiny Hachiware companion from the Happy Meal collection.';
}
