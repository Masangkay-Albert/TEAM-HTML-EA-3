import { Component, signal } from '@angular/core';
import{ MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  selector: 'app-reganit',
  imports: [MemberPreview],
  templateUrl: './reganit.html',
  styleUrl: './reganit.scss',
})
export class Reganit {
  name = signal ("John Raphael");
  photoPath = signal('assets/reganit/reganit.png');
  description = 
    'John Raphael Reganit is a 4th-year IT student, an avid reader studying '
      +'towards a Bachelor of Science in Information Technology.';

  avatarPath = signal('assets/reganit/ping.png');
  cardImagePath = signal('assets/reganit/playing.png');
  cardTitle = signal('Cat');
  cardSubtitle = signal('My little buddy');
  cardText = 'This is a photo of my cat playing with a fishing rod toy.';
}