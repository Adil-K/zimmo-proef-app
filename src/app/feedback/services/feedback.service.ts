import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

interface IFeedbackDTO {
  score: number;
  feedbackMessage: string;
}

@Injectable()
export class FeedbackService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.api}/api/feedback`;
  }

  sendFeedback(feedback: IFeedbackDTO): Observable<any> {
    return of(
      console.log({ url: this.url, method: 'POST', payload: feedback })
    );

    // normally we would do this:
    // return this.httpClient.post(this.url, feedback);
  }
}
