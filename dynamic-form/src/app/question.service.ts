import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Gender',
        options: [
          {key: 'solid',  value: 'Male'},
          {key: 'great',  value: 'Female'},
          {key: 'good',   value: 'unprecised'},
        ],
        order: 5
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'LastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'Telephone ',
        label: 'Telephone',
        value: 'Bombastic',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
