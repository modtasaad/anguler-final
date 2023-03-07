import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styles: [
  ]
})
export class UsersdetailsComponent implements OnInit  {
  id=0;
  user:any;
constructor(myactive:ActivatedRoute , public service:DemoService){
this.id = myactive.snapshot.params['id'];
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.service.getuserbyid(this.id).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.user=data;
        },
        error:(err)=>{
          console.log(err);
        },
      }
    )
  }
}
