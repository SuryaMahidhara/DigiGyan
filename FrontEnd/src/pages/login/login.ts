import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { QuestionPage } from '../questions/questions';
import { RegisterPage } from '../register/register'
import { Router } from '@angular/router';
import { Services } from '../../Service/Service';

@Component({
  selector: 'page-about',
  templateUrl: 'login.html',
  providers: [Services]
})
export class LoginPage {
  userName: string = '';
  password: string = '';
  userDetails = {userName: '', userId: '', tags: ['html', 'css']};
  url: string = 'http://10.14.224.137:3000/api/';
  constructor(public navCtrl: NavController, private http: Http, private service: Services){

  }

  loginUser(){
    this.post('login',{userName: this.userName, password: this.password}).subscribe((data) => {
      if(data.status) {
        localStorage.setItem('userDetails', JSON.stringify(data.result)); 
        this.service.setUserDetails(data.result);
        this.navCtrl.setRoot(QuestionPage);
      }
      else{
      }
    });
  }

  registerUser(){
    this.navCtrl.setRoot(RegisterPage);
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

