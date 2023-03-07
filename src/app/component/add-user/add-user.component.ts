import { Component } from '@angular/core';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

constructor(public service:DemoService){}
  add(name:any,username:any,email:any){
    let user = {name,username,email};
    console.log(user);
    
    this.service.adduser(user).subscribe();
  }
  // name="";
  // username="";
  // email="";
}
