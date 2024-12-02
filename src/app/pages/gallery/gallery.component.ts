import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit{
  photoTest = new Photo();
  ngOnInit(): void {
      this.photoTest.url = "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg";
  }
}
