import { Component } from '@angular/core';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuItems = [
    {
      name: 'Overview',
      ref: '#overview',
    },
    {
      name: 'Education',
      ref: '#education',
    },
    {
      name: 'Career',
      ref: '#career',
    },
    {
      name: 'Personal',
      ref: '#personal',
    },
  ];

  footerItems = [
    {
      name: 'phone',
      icon: faPhone,
    },
    {
      name: 'email',
      icon: faEnvelope,
    },
    {
      name: 'github',
      icon: faGithub,
    },
    {
      name: 'instagram',
      icon: faInstagram,
    },
  ];

  faInstagram = faInstagram;
}
