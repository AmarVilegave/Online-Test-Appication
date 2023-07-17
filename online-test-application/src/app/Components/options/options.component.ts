import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from 'src/app/Service/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() currentIndex: number;
  @Input() questions: any[] = [];
  @Input() candidateQuestions:any[] = [];
  @Output() nextClick = new EventEmitter();
  @Output() preClick = new EventEmitter();
  @Output() optionChange = new EventEmitter();
  @Output() updateAnswers = new EventEmitter();

  constructor(private testService:TestService, private router:Router) { }

  ngOnInit(): void {
  }

  onNextClick(currentIndex: number) {
    this.nextClick.emit(currentIndex);
  }

  onPreClick(currentIndex: number) {
    this.preClick.emit(currentIndex);
  }

  getAnswer(event: any, optId: number, optAns: boolean) {
    event.answerSelected = optId;
    event.result = optAns;
    this.optionChange.emit(event);
  }

  onSubmit() {
    this.updateAnswers.emit();
  }

}
