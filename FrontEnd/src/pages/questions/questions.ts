import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Services } from '../../Service/Service';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-about',
  templateUrl: 'questions.html',
  providers: [Services]
})
export class QuestionPage {
  constructor(private service: Services,public navCtrl: NavController,public http: Http) {
  }
  url: string = 'http://10.14.224.137:3000/api/';
  userDetails: any = JSON.parse(localStorage.getItem('userDetails'));//this.service.getUserDetails();
  segmentTag: string = "questions";
  title: string = '';
  description: string = '';
  tags = [{tag: 'html', isChecked:false}, {tag: 'css', isChecked:false}, {tag: 'javascript', isChecked:false}];
  questions = [];
  getLikesCount(answers) {
      let count = 0;
      for(let item of answers) {
          count = count + parseInt(item.likes);
      }
      return count;
  };
  tempData = [];
  ngOnInit() {
    this.tempData = [];
    let body = {tags: this.userDetails.tags}
    this.post('getQuestions', body).subscribe((res) => {
      if(res.status) {
        this.tempData = res.result.questions;
        this.showQuestions('questions');
      }
    });
  }

  showQuestions(qutionType) {
    this.questions = [];
    if(qutionType === 'questions') {
        this.questions = this.service.deepCopy(this.tempData);
    } else if(qutionType === 'myQuestions') {
      for(let item of this.tempData) {
        if(item.userId == this.userDetails.userId) {
          this.questions.push(item);    
        }
      }
    }
  }

  showAnswers(item) {
    this.post('getAnswers', {questionId: item.questionId}).subscribe((res) => {
      if(res.status) {
        item.answers = res.result.answers;
        item.isShow = true;
      }
    });
  }

  answerThis(item){
    item.isShowAnswer = true;
  }

  submitAnswer(item) {
    let body = {
      "answer": item.answer,
      "question": item.questionId,
      "user": this.userDetails.userId,
      "likes": 0
   }   
    this.post('saveAnswer', body).subscribe((res) => {
      if(res.status) {
        item.answers.push(res.result);
        item.isShowAnswer = false;
      }
    });
  }

  doYouLikethis(ans) {
    this.post('updateLike', {answerId: ans._id}).subscribe((res) => {
      if(res.status) {
        ans.likes = ans.likes + 1;
      }
    });
  }

  getTags() {
    let selectedTags = [];
    for(let item of this.tags) {
      if(item.isChecked) {
        selectedTags.push(item.tag);
      }
    }
    return selectedTags;
  }

  submitQuestion() {
    let body = {
      user: {userId: this.userDetails.userId, userName: this.userDetails.userName},
      title: this.title,
      tags: this.getTags(),
      description: this.description
    }
    this.post('saveQuestion', body).subscribe((res) => {
      if(res.status) {
        this.segmentTag = "questions";
        this.ngOnInit();
      }
    });
  }

  post(request, body): Observable<any>{
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders });
    return this.http.post(this.url + request , JSON.stringify(body), options)
    .map((res: any) => {
      return res.json();
    })
    .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
    });
  }

  selectedChecked(index) {
    this.tags[index].isChecked = !this.tags[index].isChecked;
  }
}