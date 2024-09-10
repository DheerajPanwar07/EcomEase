import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADMINComponent } from './Feature/Components/admin/admin.component';
import { BUYERComponent } from './Feature/Components/buyer/buyer.component';
import { SELLERComponent } from './Feature/Components/seller/seller.component';
import { CommonRegistrationComponent } from './Shared/Components/common-registration/common-registration.component';
import { CommonLoginComponent } from './Shared/Components/common-login/common-login.component';
import { SideNavComponent } from './Shared/Components/side-nav/side-nav.component';
import { ProductComponent } from './Feature/Components/product/product.component';
import { AddproductComponent } from './Feature/Components/addproduct/addproduct.component';
import { EditproductComponent } from './Feature/Components/editproduct/editproduct.component';
import { ProfileComponent } from './Shared/Components/profile/profile.component';
import { CartItemComponent } from './Feature/Components/cart-item/cart-item.component';


const routes: Routes = [
  
 { path:'adminlogin' ,component:ADMINComponent
 
},
{
path:'product',component:ProductComponent
},
{
  path:'addproduct',component:AddproductComponent
}
,
{ path:'Editproduct',component:EditproductComponent},
{
 path:'sidenav',component:SideNavComponent
},
 {
  path:'buyerLogin',component:BUYERComponent
 },
 {
   path:'sellerlogin',component:SELLERComponent
},
{
  path:'',component:CommonLoginComponent
},
{
path:'Registration',component:CommonRegistrationComponent

},
{
  path:'userProfile',component:ProfileComponent
},
{
  path:'cartItem',component:CartItemComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
