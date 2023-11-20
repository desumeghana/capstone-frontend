import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userId: any;
  userData: any
  constructor(private userService: UsersService,private router:Router) {
    this.userId="";
  }
  ngOnInit() {
    if(localStorage.getItem('userId')!=null)
    {
      this.userId = localStorage.getItem("userId");
      if (this.userId.length > 0) {
      this.userService.getUserById(this.userId).subscribe(
        response => {
          this.userData = response;
          localStorage.setItem("userData",JSON.stringify(response));
        }
      )
    };
    }
  }
  logOut(){
    this.userId=localStorage.setItem("userId","");
    this.userData=localStorage.setItem("userData","");
    this.router.navigate(['/']);
  }
}
