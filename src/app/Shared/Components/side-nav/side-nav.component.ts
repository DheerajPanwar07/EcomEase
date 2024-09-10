import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  constructor(private router:Router){}



  onsubmit()
  {
    this.router.navigate(['product']);
  }

  
  Addproduct()
  {
   this.router.navigate(['addproduct']);
  }
  Editproduct()
  {
    this.router.navigate(['Editproduct']);
  }
}
