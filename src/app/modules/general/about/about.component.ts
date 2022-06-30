import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private seoService: SeoService) {
    
    const content = 'About content with meta';
    this.seoService.setMetaDescription(content);

  }

}
