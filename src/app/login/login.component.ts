import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: any;
  usersData: any;
  loginSuccessfull = "";
  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
    this.formData = this.fb.group({
      'cb':[false],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(8)]],
    })
    
  }
  get email(): AbstractControl { return this.formData.get('email'); }
  get password(): AbstractControl { return this.formData.get('password'); }

  login() {
    //console.log(this.formData.value);
    if(this.formData.value.cb==false){
    this.usersService.login(this.formData.value.email, this.formData.value.password).subscribe(
      (response: any) => {
        // console.log(response);
        if (response != "User not found") {
          localStorage.setItem('userId', response);
          this.loginSuccessfull = "Login Successful";
          //this.usersService.getUserById(response)  
          this.router.navigate(['/'])
        }
        else {
          this.loginSuccessfull = "User not found or Password invalid";
        }
      });
    }
    else{
      if(this.formData.value.email==="admin@chubb.com" && this.formData.value.password==="admin@chubb"){
        //this.router.navigate(['/sidebar'])
        localStorage.setItem('userId', 'admin');
        console.log("admin logged succesfully");
        this.router.navigate(['/admin']);
      }
      else{
        alert("admin credentials are invalid");
      }
    }
  }
}


// this.usersService.login(this.formData.value.email,this.formData.value.password).
// subscribe((response)=>{
//     if(response==="User not found"){
//       console.log("user not found");
//     }
//     else{
//       console.log("user login successfull")
//       localStorage.setItem('userId',response.toString());
//     }
// });