import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrl: './buyer.component.css'
})
export class BUYERComponent {
  constructor(private router:Router){}



  onsubmit()
  {
    this.router.navigate(['product']);
  }
}
