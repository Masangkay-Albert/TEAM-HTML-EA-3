import { Component, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-member-preview',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './member-preview.html',
  styleUrl: './member-preview.scss',
})

export class MemberPreview {
  name = input.required<string>();
  photoPath = input.required<string>();
  photoAlt = input<string>('Member photo');
  description = input<string>();

  avatarPath = input<string>('');
  avatarAlt = input<string>('Avatar Image');
  cardImagePath = input<string>('');
  cardImageAlt = input<string>('Card Image');
  cardTitle = input<string>('');
  cardSubtitle = input<string>('');
  cardText = input<string>('');

  isDescriptionVisible = signal(false);

    toggleDescriptionVisibility() {
      this.isDescriptionVisible.set(!this.isDescriptionVisible());
  }
}
