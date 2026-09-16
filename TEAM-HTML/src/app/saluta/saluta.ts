import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import{ MemberPreview } from '../shared/member-preview/member-preview';
@Component({
  selector: 'app-saluta',
  
  imports: [MatCardModule, MatButtonModule, MemberPreview],
  templateUrl: './saluta.html',
  styleUrl: './saluta.scss',
})
export class Saluta {
  name = signal('James Saluta');
  photoPath = signal('assets/saluta/james3.jpg');
  isDescriptionVisible = signal(false);
  description = signal('James Saluta is a 4th-year IT student who loves to design web pages.');
  avatarPath = signal('assets/saluta/jaems1.jpg');
  cardImagePath = signal('assets/saluta/jaems1.jpg');
  cardTitle = signal('Herhsey dog');
  cardSubtitle = signal('Toy poodle');
  cardText = 
      'This is a photo of my dog, Herhsey. She is a toy poodle and she is very cute and playful.';
}

