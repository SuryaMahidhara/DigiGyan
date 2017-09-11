import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Services } from '../../Service/Service';
import { LoginPage } from '../login/login';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { QuestionPage } from '../questions/questions'
import { Router } from '@angular/router';

@Component({
  selector: 'page-contact',
  templateUrl: 'register.html',
  providers: [Services]
})
export class RegisterPage {
  tags = [{tag: 'html', isChecked:false}, {tag: 'css', isChecked:false}, {tag: 'javascript', isChecked:false}];
  userName: string = '';
  password: string = '';
  url: string = 'http://10.14.224.137:3000/api/';
  constructor(public navCtrl: NavController, private service: Services, private http: Http) {
  }

  registerUser() {
    let body = {
      tags: this.getTags(),
      userName: this.userName,
      password: this.password
    }
    this.post('register', body).subscribe((res) => {
      if(res.status) {
        this.navCtrl.setRoot(LoginPage);
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

  selectedChecked(index) {
    this.tags[index].isChecked = !this.tags[index].isChecked;
  }

  checkValidations() {
    let tagsCount = this.getTags().length;
    return (this.userName.length == 0 || this.password.length == 0 || tagsCount == 0) ? true : false
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
}
