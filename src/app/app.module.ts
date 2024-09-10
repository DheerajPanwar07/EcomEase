import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { SideNavComponent } from './Shared/Components/side-nav/side-nav.component';
import { ADMINComponent } from './Feature/Components/admin/admin.component';
import { SELLERComponent } from './Feature/Components/seller/seller.component';
import { BUYERComponent } from './Feature/Components/buyer/buyer.component';
import { CommonLoginComponent } from './Shared/Components/common-login/common-login.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonRegistrationComponent } from './Shared/Components/common-registration/common-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './Feature/Components/product/product.component';
import { AddproductComponent } from './Feature/Components/addproduct/addproduct.component';
import { EditproductComponent } from './Feature/Components/editproduct/editproduct.component';
import { HomeNavComponent } from './Shared/Components/home-nav/home-nav.component';
import { ProfileComponent } from './Shared/Components/profile/profile.component';
import { CartItemComponent } from './Feature/Components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     FooterComponent,
     SideNavComponent,
     ADMINComponent,
     SELLERComponent,
     BUYERComponent,
     CommonLoginComponent,
     CommonRegistrationComponent,
     ProductComponent,
     AddproductComponent,
     EditproductComponent,
     HomeNavComponent,
     ProfileComponent,
     CartItemComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration(),provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
