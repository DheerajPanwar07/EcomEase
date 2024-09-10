import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SELLERComponent {
  products:any[]=[];
  private api = 'https://localhost:7081/api/EcomEase/getProduct';

  constructor(private http:HttpClient,private router:Router){}
  


ngOnInit():void{
  
  this.Getproduct();
}
  Getproduct()
  {
    
    this.http.get<any[]>(this.api).subscribe(
      data => this.products=data,
    );
  }
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
