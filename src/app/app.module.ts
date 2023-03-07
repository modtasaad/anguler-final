import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustemDirective } from './Directives/custem.directive';
import { TestComponent } from './component/test/test.component';
import { CustmPipe } from './Pipe/custm.pipe';
import { UsersComponent } from './component/users/users.component';
import { UsersdetailsComponent } from './component/usersdetails/usersdetails.component';
import { HeaderComponent } from './component/header/header.component';
import { ErrorComponent } from './component/error/error.component';
// import { AddNewUserComponent } from './component/add-new-user/add-new-user.component';
import { UodateNewUserComponent } from './component/uodate-new-user/uodate-new-user.component';
import { AddUserComponent } from './component/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CustemDirective,
    TestComponent,
    CustmPipe,
    UsersComponent,
    UsersdetailsComponent,
    HeaderComponent,
    ErrorComponent,
    // AddNewUserComponent,
    UodateNewUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
