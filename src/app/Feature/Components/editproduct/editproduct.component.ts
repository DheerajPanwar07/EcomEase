
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productForm: FormGroup;
  private api = 'https://localhost:7081/api/EcomEase/Update';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.productForm = this.formBuilder.group({
      id: [],  
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      sellerId: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    debugger;
    if (this.productForm.valid) {
      const productData = {
        productId: 0,  // Default value, since `productId` is auto-incremented in the DB
        ...this.productForm.value
      };

      const id = this.productForm.value.id;

      this.http.put(`${this.api}/${id}`, productData)
        .subscribe({
          next: (response) => {
            console.log('Product updated successfully:', response);
            alert('Product updated successfully');
          },
          error: (error) => {
            console.error('Error updating product:', error);
            alert('Product updated successfully');
          },
          complete: () => {
            console.log('Update operation completed');
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
