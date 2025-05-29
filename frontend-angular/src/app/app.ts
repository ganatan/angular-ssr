import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'angular-routing';
  footerUrl = 'https://www.ganatan.com';
  footerLink = 'www.ganatan.com';
  ngOnInit(): void {

    const navMain = document.getElementById('navbarCollapse');
    if (navMain) {
      navMain.onclick = function onClick() {
        if (navMain) {
          navMain.classList.remove("show");
        }
      }
    }
  }
}