import {Component, ViewEncapsulation} from '@angular/core';
import {QuestionService} from './question/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'quiz-peniel';

  constructor(
    public questionService: QuestionService
  ) {
  }
}
