import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{
  productForm: FormGroup;

  private api = 'https://localhost:7081/api/EcomEase/AddProduct';

  constructor(private formbulder:FormBuilder, private http: HttpClient) {


    this.productForm = this.formbulder.group({

      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description:['', Validators.required],
      quantity: this.formbulder.array([]),
      sellerId: ['', Validators.required],
      
    });
  }

  

  ngOnInit(): void {}

  onSubmit(): void {
    debugger;
    if (this.productForm.valid) {
      console.log('Product Data:', this.productForm.value);
      // Here you can add the logic to send the data to your database or API
      this.http.post(this.api,this.productForm.value).subscribe((val:any)=>{
        alert()
      })
      alert("successfully Data Filled")
     
      
    } else {
      console.log('Form is invalid');
    }
  }


  
  
}
