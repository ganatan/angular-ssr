import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}