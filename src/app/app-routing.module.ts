import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
// import { AddNewUserComponent } from './component/add-new-user/add-new-user.component';
import { ErrorComponent } from './component/error/error.component';
import { UodateNewUserComponent } from './component/uodate-new-user/uodate-new-user.component';
import { UsersComponent } from './component/users/users.component';
import { UsersdetailsComponent } from './component/usersdetails/usersdetails.component';

const routes: Routes = [
{path:"",component:UsersComponent },
{path:"user/:id",component:UsersdetailsComponent },
{path:"adduser",component:AddUserComponent },
{path:"updateser",component:UodateNewUserComponent },
{path:"**",component:ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
