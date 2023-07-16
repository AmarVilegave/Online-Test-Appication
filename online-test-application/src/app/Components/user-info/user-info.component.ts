import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  userInfoForm = this.fb.group({
    firstName : ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.pattern(
      '^[a-z][a-zA-Z0-9-._]+@([a-zA-Z]{3,})+.+[a-zA-Z.]{2,}$'
    )]]
  })

  ngOnInit(): void {
  }

}
