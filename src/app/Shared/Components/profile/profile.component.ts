import { Component, OnInit } from '@angular/core';
import { ProfilServiceService } from '../../Services/profil-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  rolename: any;

  constructor(private profileser: ProfilServiceService, private router: Router) { }
  
  isLoggedIn(): boolean {
    debugger;
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    debugger;
    if (this.isLoggedIn() == true) {
      
      
      this.profileser.getProfileData().subscribe({
        next: (response: any) => {
          debugger;
          console.log(response.data);
          this.profile = response.data[0];
          
          if (this.profile.roleId == 1) {
            this.rolename = 'Admin';
            this.router.navigate(['userProfile']);
          }
          else if (this.profile.roleId == 2) {
            this.rolename = 'Seller';
            this.router.navigate(['userProfile']);
          }
          else if (this.profile.roleId == 3) {
            this.rolename = 'Buyer';
            this.router.navigate(['userProfile']);
          }
        },
        error: (error: any) => {
          console.error('Error fetching profile data', error);
        },
        complete: () => {
          console.log('Profile data retrieval complete');
        }
      });
    }
    else {
      this.router.navigate(['']);
    }
  }
  // Navigate to the user details page for Admin
  showUserDetails() {
    this.router.navigate(['adminlogin']);
  }

  // Navigate to the seller's products page
  showSellerProducts() {
    this.router.navigate(['sellerlogin']);
  }

  // Navigate to the buyer's product browsing page
  goToBuyerComponent() {
    this.router.navigate(['buyerLogin']);
  }
}




