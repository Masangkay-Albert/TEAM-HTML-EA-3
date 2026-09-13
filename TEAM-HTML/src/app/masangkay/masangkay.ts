import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  selector: 'app-masangkay',
  imports: [MatCardModule, MatButtonModule, MemberPreview],
  templateUrl: './masangkay.html',
  styleUrl: './masangkay.scss',
})

export class Masangkay {
  name = signal('John Albert');
  photoPath = signal('assets/masangkay/masangkay.jpg');
  isDescriptionVisible = signal(false);
  description = 
    'John Albert is a 4th year college student at De La Salle University'
      + '-Dasmarinas, taking a Bachelor of Science in Information Technology.';
  
  avatarPath = signal('assets/masangkay/luffy.jpg');
  cardImagePath = signal('assets/masangkay/op.jpg');
  cardTitle = signal('One Piece');
  cardSubtitle = signal('Straw Hats');
  cardText = 
      'This photo is the Straw Hats from the anime One Piece. The Straw Hats'
      + ' are a group of pirates led by Monkey D. Luffy, who is on a quest to'
      + ' find the legendary treasure known as "One Piece" and become the Pirate King.';
  }