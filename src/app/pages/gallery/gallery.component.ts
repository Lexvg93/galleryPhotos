import { Component } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
