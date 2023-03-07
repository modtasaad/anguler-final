import { Component,OnInit } from '@angular/core';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent  implements OnInit {
 user:any
 constructor(public service:DemoService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.service.getallusers().subscribe(
      {
        next:(data)=>{
          // console.log(data);
          this.user=data;
        },
        error:(err)=>{console.log(err);
        }
      }
    )
  }

}
