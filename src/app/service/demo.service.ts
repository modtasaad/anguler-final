import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( public myclinet:HttpClient) { }
  // http://localhost:3000/userrs
// Base_Url="https://jsonplaceholder.typicode.com/users";
Base_Url=" http://localhost:3000/userrs";

getallusers(){
  // {observe:"response"}=>to get the header 
//  to get the data in user component on next => this.user=data.body
  return this.myclinet.get(this.Base_Url);
}
getuserbyid(id:any){
  return this.myclinet.get(this.Base_Url+"/"+id);
}
adduser(user:any){
  return this.myclinet.post(this.Base_Url,user);
}
updateuser(id:any,updteduser:any){
  return this.myclinet.put(this.Base_Url+"/"+id,updteduser);
}
}
