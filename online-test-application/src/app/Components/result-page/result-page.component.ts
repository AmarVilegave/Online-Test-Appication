import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  correctAns: any;
  wrongAns: any;
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.correctAns = param.get('c');
      console.log(param.get('c'));
      this.wrongAns = param.get('w');
    });

    this.redirect()
  }

  ngOnInit(): void {
  }

  redirect() {
    setTimeout(() => {

          this.router.navigate(['/', 'home']).then(() => {
            window.location.reload();
          });


    }, 10000);
  }

}
