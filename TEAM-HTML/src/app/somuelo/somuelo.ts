import { Component, signal } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  selector: 'app-somuelo',
  imports: [MemberPreview],
  templateUrl: './somuelo.html',
  styleUrl: './somuelo.scss',
})
export class Somuelo {
  name = signal('Alarie Somuelo');
  photoPath = signal('assets/somuelo/somuelo.jpg');
  description =
    'Alarie Somuelo is a 4th year college student-athlete at De La Salle'
      + ' University-Dasmarinas, taking a Bachelor of Science in Information'
      + ' Technology, and a member of the swimming varsity team.';

  avatarPath = signal('assets/somuelo/somuelo.jpg');
  cardImagePath = signal('assets/somuelo/capybara.jpg');
  cardTitle = signal('Capybara');
  cardSubtitle = signal('My favorite animal');
  cardText = 'This is a photo of a capybara.';
}
