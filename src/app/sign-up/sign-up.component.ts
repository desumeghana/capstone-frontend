import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UsersService } from 'src/services/users.service';
interface user{
  userName:string,
  email:string,
  password:string
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm: any;
  userData:user;
  constructor(private fb:FormBuilder,private usersService:UsersService,private router:Router){
    this.userData={
      userName:"",
      email:"",
      password:""
    }
    this.registerForm = this.fb.group({
      username:['',[Validators.required]],
      emailId:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator })
  }

  get username(): AbstractControl { return this.registerForm.get('username'); }
  get emailId(): AbstractControl { return this.registerForm.get('emailId'); }
  get password(): AbstractControl { return this.registerForm.get('password'); }
  get confirmPassword(): AbstractControl { return this.registerForm.get('confirmPassword'); }

  passwordMatchValidator: ValidatorFn = (control: any): {[key: string]: boolean} | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password!.value !== confirmPassword!.value) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };


  Register(){
   this.userData.userName=this.registerForm.value.username;
   this.userData.email=this.registerForm.value.emailId;
   this.userData.password=this.registerForm.value.password;
    this.usersService.createUser(this.userData).subscribe(
      response=>{
        //console.log(response);
        console.log("user added successfully");
        this.router.navigate(['/login'])
      }
    );
  }
}
