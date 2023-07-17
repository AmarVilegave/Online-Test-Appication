import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestService } from 'src/app/Service/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  candidateObject: any = null;

  constructor(private fb:FormBuilder,
    private testService:TestService,
    private router:Router) { }

  userInfoForm = this.fb.group({
    firstName : ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.pattern(
      '^[a-z][a-zA-Z0-9-._]+@([a-zA-Z]{3,})+.+[a-zA-Z.]{2,}$'
    )]]
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const newUser = {
      fullName : this.userInfoForm.get('firstName').value +" " +this.userInfoForm.get('lastName').value,
      id: this.userInfoForm.get('email').value,
    }
    this.testService.getCandidateObject(newUser.id).subscribe((res) => {
      this.candidateObject = res;
      if(this.candidateObject != null) {
        alert('user already exist')

      } else{
        this.testService.updateCandidateData(newUser).subscribe((res) => {})
        this.router.navigateByUrl(`test/${newUser.id}`)


      }
    },error => {

      if(error.status === 404) {
        this.testService.updateCandidateData(newUser).subscribe((res) => {})
        this.router.navigateByUrl(`test/${newUser.id}`)
      }
    })




  }

}
