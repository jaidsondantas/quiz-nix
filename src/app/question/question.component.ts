import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionService} from './question.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {

  question: any;
  options: string = '';
  isCorrect: boolean | null = null;

  constructor(
    public questionService: QuestionService
  ) {
  }

  ngOnInit(): void {
    this.questionService.question.subscribe(res => {
      this.question = res;
    })
  }

  seeAnswer(): void {
    console.log(this.options)
    if (this.question.answer == this.options) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }

}
