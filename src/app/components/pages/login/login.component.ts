import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata:FormGroup;
  constructor() {
    this.formdata=new FormGroup({
      'fname':new FormControl('',Validators.required),
      'lname':new FormControl('',Validators.required),
      'height':new FormControl('',Validators.required),
      'age':new FormControl('',Validators.required),
      'weight':new FormControl('',Validators.required),
      'address':new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

    submit(){
      console.log(this.formdata.value)

    }
}
