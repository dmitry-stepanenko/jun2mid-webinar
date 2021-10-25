import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    {link: '/products', label: 'Products'},
    {link: '/advanced', label: 'Advanced'},

  ]
}
