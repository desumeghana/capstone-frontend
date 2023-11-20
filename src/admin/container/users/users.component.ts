import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
 Users:User[]=[]
 constructor(private userService:UsersService){
  this.userService.getAllUsers().subscribe(response=>{
    this.Users=response;
  })
 }
}
