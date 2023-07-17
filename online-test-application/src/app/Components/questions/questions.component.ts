import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Service/test.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  time:number;
  questionsList: any[] = [];
  candidateQuestions: any[] = [];
  candidateInfo:any;
  index:number;
  countDown:string;
  correctAns:number;
  wrongAns:number;
  constructor(private testService:TestService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.testService.getTimeObservable().subscribe((serviceTime) => {
      this.time = serviceTime;
    });

    this.questionsList = this.testService.getAllQuestions();
    this.candidateQuestions = this.testService.getAllQuestions();

    this.activatedRoute.params.subscribe((params) => {
      this.testService.getCandidateObject(params.email).subscribe((userObject) => {
        this.candidateInfo = userObject;
      })
      })
  }

  ngOnInit(): void {
    this.getIndex();

    let timeUp = setInterval(() => {
      const minutes = Math.floor(this.time / 60);
      let seconds = this.time % 60;
      seconds = seconds < 10 ? 0 + seconds : seconds;
      this.countDown = `${minutes}m : ${seconds}s`;
      if (this.time === 0) {
        clearInterval(timeUp);
        this.updateCandidatesAnswers()
        return;
      } else {
        this.time--;
        // console.log(this.time);
      }
    }, 1000);
  }

  getIndex() {
    return this.testService.getIndex().subscribe((ind) => {
      this.index = ind;
    });
  }

  next() {
    return this.index++;
  }

  previous() {
    return this.index--;
  }

  changeAns(obj: any) {

    this.candidateQuestions.forEach((userQuestion) => {
      if(userQuestion.id === obj.id) {
        userQuestion.answerSelected = obj.answerSelected
      }
    })
  }

  updateCandidatesAnswers() {
    let url = `http://localhost:5000/answers/${this.candidateInfo.id}`

    this.correctAns = 0;
    this.wrongAns = 0;
    this.candidateQuestions.forEach((obj) => {
      if (obj.result) {
        console.log('inside', obj)
        this.correctAns++;
      } else {
        this.wrongAns++;
      }
    });


    let userAnswers = {
      questions : this.candidateQuestions,
      score: this.correctAns * 10 + '/' + 90,
    }

    this.testService.updateAnswer(userAnswers, url).subscribe((res) =>{})

    this.router.navigate(['/result', this.correctAns, this.wrongAns]);

  }

}
