import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class ADMINComponent {
  Detials:any[]=[];
  private api = 'https://localhost:7081/api/EcomEase/getRegistrationDetails';
  private updateApi = 'https://localhost:7081/api/EcomEase/updatestatus'; 

  constructor(private http:HttpClient){}

ngOnInit():void{
  this.Getproduct();
}
Getproduct() {
  this.http.get<any[]>(this.api).subscribe(
    data => this.Detials = data,
    error => console.error('Error fetching data:', error)
  );
}

changeStatus(userID: string, status: boolean) {
  debugger;
  this.http.put(`${this.updateApi}/${userID}`, { isActive: status })
    .subscribe({
      next: (response) => {
        console.log('Status updated successfully:', response);

        // Update the local 'Detials' array to reflect the status change
        const user = this.Detials.find(u => u.userID === userID);
        if (user) {
          user.isActive = status; // Update the isActive status locally
        }

        alert('Status updated successfully:');
      },
      error: (error) => {
        console.error('Error updating status:', error);
        alert('Error updating status.');
      },
      complete: () => {
        console.log('Completed task');
      }
    });
}



}
