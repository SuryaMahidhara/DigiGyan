webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questions_questions__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Service_Service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, http, service) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.service = service;
        this.userName = '';
        this.password = '';
        this.userDetails = { userName: '', userId: '', tags: ['html', 'css'] };
        this.url = 'http://10.14.224.137:3000/api/';
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.post('login', { userName: this.userName, password: this.password }).subscribe(function (data) {
            if (data.status) {
                localStorage.setItem('userDetails', JSON.stringify(data.result));
                _this.service.setUserDetails(data.result);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__questions_questions__["a" /* QuestionPage */]);
            }
            else {
            }
        });
    };
    LoginPage.prototype.registerUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.post = function (request, body) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.post(this.url + request, JSON.stringify(body), options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="header">\n      DigiGyan App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list >\n    <ion-item no-lines >\n      <ion-label>Login</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="userName" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="password" placeholder="Password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class="button-width">\n    <button ion-button color="primary" (click)="loginUser()"  block>Submit</button>\n    <p><a (click)="registerUser()">Register User</a></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__Service_Service__["a" /* Services */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__Service_Service__["a" /* Services */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_Service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionPage = (function () {
    function QuestionPage(service, navCtrl, http) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.http = http;
        this.url = 'http://10.14.224.137:3000/api/';
        this.userDetails = JSON.parse(localStorage.getItem('userDetails')); //this.service.getUserDetails();
        this.segmentTag = "questions";
        this.title = '';
        this.description = '';
        this.tags = [{ tag: 'html', isChecked: false }, { tag: 'css', isChecked: false }, { tag: 'javascript', isChecked: false }];
        this.questions = [];
        this.tempData = [];
    }
    QuestionPage.prototype.getLikesCount = function (answers) {
        var count = 0;
        for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
            var item = answers_1[_i];
            count = count + parseInt(item.likes);
        }
        return count;
    };
    ;
    QuestionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.tempData = [];
        var body = { tags: this.userDetails.tags };
        this.post('getQuestions', body).subscribe(function (res) {
            if (res.status) {
                _this.tempData = res.result.questions;
                _this.showQuestions('questions');
            }
        });
    };
    QuestionPage.prototype.showQuestions = function (qutionType) {
        this.questions = [];
        if (qutionType === 'questions') {
            this.questions = this.service.deepCopy(this.tempData);
        }
        else if (qutionType === 'myQuestions') {
            for (var _i = 0, _a = this.tempData; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.userId == this.userDetails.userId) {
                    this.questions.push(item);
                }
            }
        }
    };
    QuestionPage.prototype.showAnswers = function (item) {
        this.post('getAnswers', { questionId: item.questionId }).subscribe(function (res) {
            if (res.status) {
                item.answers = res.result.answers;
                item.isShow = true;
            }
        });
    };
    QuestionPage.prototype.answerThis = function (item) {
        item.isShowAnswer = true;
    };
    QuestionPage.prototype.submitAnswer = function (item) {
        var body = {
            "answer": item.answer,
            "question": item.questionId,
            "user": this.userDetails.userId,
            "likes": 0
        };
        this.post('saveAnswer', body).subscribe(function (res) {
            if (res.status) {
                item.answers.push(res.result);
                item.isShowAnswer = false;
            }
        });
    };
    QuestionPage.prototype.doYouLikethis = function (ans) {
        this.post('updateLike', { answerId: ans._id }).subscribe(function (res) {
            if (res.status) {
                ans.likes = ans.likes + 1;
            }
        });
    };
    QuestionPage.prototype.getTags = function () {
        var selectedTags = [];
        for (var _i = 0, _a = this.tags; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isChecked) {
                selectedTags.push(item.tag);
            }
        }
        return selectedTags;
    };
    QuestionPage.prototype.submitQuestion = function () {
        var _this = this;
        var body = {
            user: { userId: this.userDetails.userId, userName: this.userDetails.userName },
            title: this.title,
            tags: this.getTags(),
            description: this.description
        };
        this.post('saveQuestion', body).subscribe(function (res) {
            if (res.status) {
                _this.segmentTag = "questions";
                _this.ngOnInit();
            }
        });
    };
    QuestionPage.prototype.post = function (request, body) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.post(this.url + request, JSON.stringify(body), options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    QuestionPage.prototype.selectedChecked = function (index) {
        this.tags[index].isChecked = !this.tags[index].isChecked;
    };
    return QuestionPage;
}());
QuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\questions\questions.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n      <ion-title>\n\n          DigiGyan App\n\n      </ion-title>\n\n    </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="segmentTag">\n\n      <ion-segment-button (click)="showQuestions(\'questions\')" class="segment-button" value="questions">\n\n        Questions\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="showQuestions(\'myQuestions\')" class="segment-button" value="myQuestions">\n\n        My Questions\n\n      </ion-segment-button>\n\n      <ion-segment-button class="segment-button" value="askQuestion">\n\n        Ask a Question\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="segmentTag">\n\n    <ion-list  *ngSwitchCase="\'questions\'">\n\n      <ion-item  *ngFor="let item of questions">\n\n            <p class="text-title">{{item.title}}</p>\n\n            <span class="text-description">{{item.description}}</span>\n\n            <div class="div-likes-answers"><p><a class="text-likes-answers" (click)="showAnswers(item)" >Answers {{item.answersCount}}</a></p></div>\n\n              <p class="width100" *ngIf="item.isShow? item.isShow : false">\n\n                <span class="text-title answer-textstyle">Answers</span>\n\n                <span class="answer-textstyle-right">\n\n                    <a (click)="answerThis(item)" class="text-title float-right">You want to answer this?</a>\n\n                </span>\n\n                <ion-list>\n\n                  <ion-item *ngFor="let ans of item.answers">\n\n                    <span class="text-description">{{ans.answer}}</span><span class="text-likes-answers  float-right" >Likes {{ans.likes}}</span>\n\n                    <div class="width100"><a class="answer-textstyle-right" (click)="doYouLikethis(ans)" >Do you like this?</a></div>\n\n                  </ion-item>\n\n                </ion-list>\n\n              </p>\n\n              <div *ngIf="item.isShowAnswer? item.isShow : false">\n\n                <ion-list>\n\n                  <ion-item no-lines>\n\n                    <ion-label>My Answer</ion-label>\n\n                  </ion-item>\n\n                  <ion-item no-lines>\n\n                    <textarea name="answer" class="width100 textarea-resize" rows="5" placeholder="Please provide your answer here" [(ngModel)]="item.answer" > </textarea>\n\n                  </ion-item>\n\n                  <ion-item no-lines>\n\n                    <div class="button-width" class="aglin-right">\n\n                      <button ion-button color="primary" (click)="submitAnswer(item)"  block>Submit</button>\n\n                    </div>\n\n                  </ion-item>\n\n                </ion-list>\n\n                </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list  *ngSwitchCase="\'myQuestions\'">\n\n      <ion-item  *ngFor="let item of questions">\n\n        <p class="text-title">{{item.title}}</p>\n\n        <span class="text-description">{{item.description}}</span>\n\n        <div class="div-likes-answers"><p><a class="text-likes-answers" (click)="showAnswers(item)" >Answers {{item.answersCount}}</a></p></div>\n\n          <p class="width100" *ngIf="item.isShow? item.isShow : false">\n\n            <span class="text-title answer-textstyle">Answers</span>\n\n            <span class="answer-textstyle-right">\n\n                <a (click)="answerThis(item)" class="text-title float-right">You want to answer this?</a>\n\n            </span>\n\n            <ion-list>\n\n              <ion-item *ngFor="let ans of item.answers">\n\n                <span class="text-description">{{ans.answer}}</span><span class="text-likes-answers  float-right" >Likes {{ans.likes}}</span>\n\n                <div class="width100"><a class="answer-textstyle-right" (click)="doYouLikethis(ans)" >Do you like this?</a></div>\n\n              </ion-item>\n\n            </ion-list>\n\n          </p>\n\n          <div *ngIf="item.isShowAnswer? item.isShow : false">\n\n            <ion-list>\n\n              <ion-item no-lines>\n\n                <ion-label>My Answer</ion-label>\n\n              </ion-item>\n\n              <ion-item no-lines>\n\n                <textarea name="answer" class="width100 textarea-resize" rows="5" placeholder="Please provide your answer here" [(ngModel)]="item.answer" > </textarea>\n\n              </ion-item>\n\n              <ion-item no-lines>\n\n                <div class="button-width" class="aglin-right">\n\n                  <button ion-button color="primary" (click)="submitAnswer(item)"  block>Submit</button>\n\n                </div>\n\n              </ion-item>\n\n            </ion-list>\n\n            </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'askQuestion\'">\n\n      <ion-list>\n\n        <ion-item>\n\n            <ion-input type="text" [(ngModel)]="title" placeholder="Title"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <textarea name="answer" style="resize:none;width:100%" rows="5" placeholder="Description" [(ngModel)]="description" > </textarea>\n\n        </ion-item>\n\n        <ion-item no-lines *ngFor="let item of tags; let indx = index;">\n\n          <ion-label>{{item.tag}}</ion-label>\n\n          <ion-checkbox (click)="selectedChecked(indx)"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div class="button-width" style="text-align: center">\n\n        <button ion-button color="primary" (click)="submitQuestion()"  block>Submit</button>\n\n       </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\questions\questions.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__Service_Service__["a" /* Services */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Service_Service__["a" /* Services */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Service_Service__["a" /* Services */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], QuestionPage);

var _a, _b, _c;
//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Services = (function () {
    function Services() {
        this.userDetails = { userName: '', userId: '', tags: ['html', 'css'] };
    }
    Services.prototype.deepCopy = function (oldObj) {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === "object") {
            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    };
    Services.prototype.getUserDetails = function () {
        return { userName: this.userDetails.userName, userId: this.userDetails.userId, tags: this.userDetails.tags };
    };
    Services.prototype.setUserDetails = function (userDetails) {
        this.userDetails.userName = userDetails.userName;
        this.userDetails.userId = userDetails.userId;
        this.userDetails.tags = userDetails.tags;
    };
    return Services;
}());
Services = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Services);

//# sourceMappingURL=Service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_Service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, service, http) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.http = http;
        this.tags = [{ tag: 'html', isChecked: false }, { tag: 'css', isChecked: false }, { tag: 'javascript', isChecked: false }];
        this.userName = '';
        this.password = '';
        this.url = 'http://10.14.224.137:3000/api/';
    }
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        var body = {
            tags: this.getTags(),
            userName: this.userName,
            password: this.password
        };
        this.post('register', body).subscribe(function (res) {
            if (res.status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    };
    RegisterPage.prototype.getTags = function () {
        var selectedTags = [];
        for (var _i = 0, _a = this.tags; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isChecked) {
                selectedTags.push(item.tag);
            }
        }
        return selectedTags;
    };
    RegisterPage.prototype.selectedChecked = function (index) {
        this.tags[index].isChecked = !this.tags[index].isChecked;
    };
    RegisterPage.prototype.checkValidations = function () {
        var tagsCount = this.getTags().length;
        return (this.userName.length == 0 || this.password.length == 0 || tagsCount == 0) ? true : false;
    };
    RegisterPage.prototype.post = function (request, body) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.post(this.url + request, JSON.stringify(body), options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      DigiGyan App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list >\n    <ion-item no-lines >\n      <ion-label>Register</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="userName" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item no-lines >\n      <ion-label>Tags</ion-label>\n    </ion-item>\n    <ion-item no-lines *ngFor="let item of tags; let indx = index;">\n      <ion-label>{{item.tag}}</ion-label>\n      <ion-checkbox (click)="selectedChecked(indx)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <div class="button-width">\n    <button ion-button color="primary" (click)="registerUser()"  block>Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\register\register.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__Service_Service__["a" /* Services */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Service_Service__["a" /* Services */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questions_questions__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__questions_questions__["a" /* QuestionPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Login" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Register" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Questions" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_ai_javascript__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { email } from "emailjs/email";


var HomePage = (function () {
    function HomePage(navCtrl, _http) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this.url = 'http://ushydsasahay1:8080';
        this.freeText = '';
        this.chatList = [];
        this.prePopulateArray = [];
        this.isPopulateDataAvaialble = false;
        this.prePopulateType = '';
        this.selectedCoverages = '';
        this.selectionData = [];
        this.selectionType = '';
        this.client = new __WEBPACK_IMPORTED_MODULE_4_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: 'd03ed97ae4914599ad08c28082341944' });
    }
    HomePage.prototype.ngOnInit = function () {
        this.sendMessage('Hi');
    };
    HomePage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomePage.prototype.addText = function ($event) {
        if ($event.keyCode == "13") {
            this.addTextButton();
        }
    };
    HomePage.prototype.addTextButton = function () {
        if (this.freeText.length > 0) {
            this.chatList.push({ id: this.chatList.length + 1, text: this.freeText, time: this.getTime(), sent: true });
            this.sendMessage(this.freeText);
        }
    };
    HomePage.prototype.onSelection = function (event, item) {
        this.chatList.push({ id: this.chatList.length + 1, text: item.text, time: this.getTime(), sent: true });
        this.sendMessage(item.text);
    };
    HomePage.prototype.createBody = function () {
        var table = '<table style="border-collapse: collapse;width: 100%;">';
        for (var _i = 0, _a = this.selectionData; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.type) {
                table = table + '<tr style="background-color: #f2f2f2"><td style="text-align: left;padding: 8px;border: 1px solid black;">' + item.type + '</td><td style="text-align: left;padding: 8px;border: 1px solid black;">' + item.text + '</td></tr>';
            }
        }
        table = table + '</table>';
        return table;
    };
    HomePage.prototype.sendMessage = function (message) {
        var _this = this;
        this.isPopulateDataAvaialble = false;
        this.prePopulateArray = [];
        this.selectionData.push({ type: this.selectionType, text: message });
        this.selectionType = '';
        this.client.textRequest(message)
            .then(function (response) {
            _this.chatList.push({ id: _this.chatList.length + 1, text: response.result.fulfillment.speech, time: _this.getTime(), sent: false });
            _this.freeText = '';
            if (response.result.action) {
                if (response.result.action.length > 0) {
                    _this.isPopulateDataAvaialble = true;
                    if (response.result.action == "BusinessName") {
                        _this.selectionData.push({ type: response.result.action, text: response.result.resolvedQuery });
                        _this.prePopulateType = 'button';
                        _this.prePopulateArray = [{ text: "BAP" }, { text: "BOP" }];
                    }
                    else if (response.result.action == "Address") {
                        _this.prePopulateType = 'button';
                        _this.getData(_this.url + '/api/getChatMessages').subscribe(function (data) {
                            if (data) {
                                _this.selectionData.push({ type: response.result.action, text: response.result.resolvedQuery });
                                _this.prePopulateArray = data;
                            }
                        });
                    }
                    else if (response.result.action == "Coverages") {
                        _this.prePopulateType = 'checkBoxList';
                        _this.getData(_this.url + "/api/getCoverages").subscribe(function (data) {
                            _this.prePopulateArray = data;
                        });
                    }
                    else if (response.result.action == "emailConfirmation") {
                        // let email = ('testusertest1111@gmail.com');
                        var subject = ('Coverage Details');
                        var body = ('<html><head>Dear</head><p>Below are the details captured from our converstaion, Please reply to us if anything needs to be correted or missing</p>' + _this.createBody() + '<p>We will get back to you soon.</p></html>');
                        var params = {
                            "name": "Marcus Frankbutter",
                            "toEmail": _this.chatList[_this.chatList.length - 2].text,
                            "subject": subject,
                            "body": body
                        };
                        _this.sendEmail(params).subscribe(function (data) {
                            console.log('mail sent');
                        });
                    }
                    else if (response.result.action == "Make") {
                        _this.getData(_this.url + "/api/getVehicles").subscribe(function (data) {
                            _this.selectionData.push({ type: response.result.action, text: response.result.resolvedQuery });
                            _this.prePopulateType = 'button';
                            _this.prePopulateArray = data;
                        });
                    }
                    else if (response.result.action != 'input.unknown') {
                        _this.selectionData.push({ type: response.result.action, text: response.result.resolvedQuery });
                    }
                }
            }
        })
            .catch(function (error) { });
    };
    HomePage.prototype.scrollToBottom = function () {
        document.querySelector('.last-msg') ? document.querySelector('.last-msg').scrollIntoView() : void (0);
    };
    HomePage.prototype.getTime = function () {
        var date = new Date();
        return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    };
    HomePage.prototype.onCheckBoxSelection = function (event, item, index) {
        var selectedArray = '';
        this.prePopulateArray[index].checked = event.target.checked;
        for (var _i = 0, _a = this.prePopulateArray; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.checked === true) {
                selectedArray = selectedArray === '' ? key.text : selectedArray + ', ' + key.text;
            }
        }
        this.freeText = selectedArray;
    };
    HomePage.prototype.getData = function (getUrl) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        var url = getUrl;
        myHeaders.append('x-apikey', '475c35720b2d03bae18ce68095778adf0e782');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this._http.get(url, options).map(this.extractData).catch(this.handleError);
    };
    HomePage.prototype.extractData = function (res) {
        var body = res.json();
        if (body.result && body.result.response) {
            return { result: body.result.response };
        }
        else {
            return body;
        }
    };
    ;
    HomePage.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
        }
        else {
            var errObj = void 0, errorJSON = void 0;
            errorJSON = error.json();
            errObj = errorJSON.error || errorJSON;
            errObj.status = error.status;
            errObj.statusText = error.statusText;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errObj);
        }
    };
    ;
    HomePage.prototype.sendEmail = function (params) {
        return this.post([params], 'email', 'sendEmail').map(function (data) {
            return data.result;
        });
    };
    HomePage.prototype.post = function (data, method, handler) {
        var body = { id: '1', method: method, params: data, jsonrpc: '2.0' };
        var requestPayload = JSON.stringify(body);
        var url = this.url + '/api/' + handler;
        return this._http.post(url, requestPayload)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-content  style="background: #e0e0de;height:500px;border: 1px solid #C7C7CC; border-radius: 5px; margin-bottom: 10px;margin-top: 20px;" >\n      <ion-list no-lines >\n        <ion-item style="background: #e0e0de; " *ngFor="let message of chatList; let i = index" >\n          <div  [ngClass]="{\'last-msg\': i == chatList.length-1}">\n            <div class="msj-rta macro" *ngIf="message.sent">\n              <div class="text text-r">\n                <p>{{ message.text }}</p>\n                <p style="text-align: right;"><small>{{ message.time }}</small></p>\n              </div>\n              <div class="avatar" style="padding:0px 0px 0px 10px !important">\n                \n                <img class="img-circle" style="width:100%;" src="../../assets/icon/Webp.net-resizeimage.png">\n              </div>\n            </div>\n            <div class="msj macro" *ngIf="!message.sent">\n              <div class="avatar">\n                <img class="img-circle" style="width:100%;" src="../../assets/icon/Webp.net-resizeimage.png">\n              </div>\n              <div class="text text-l">\n                <p>{{ message.text }}</p>\n                <p style="text-align: right;"><small>{{ message.time }}</small></p>\n              </div>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n  </ion-content>\n  <div  *ngIf="isPopulateDataAvaialble">\n    <div *ngIf="prePopulateType == \'button\'">\n      <span *ngFor="let item of prePopulateArray">\n        <button class="selection-button" (click)="onSelection($event, item)">{{item.text}}</button>\n      </span>\n    </div>\n    <div *ngIf="prePopulateType == \'checkBoxList\'">\n        <ion-list no-lines >\n          <ion-item *ngFor="let item of prePopulateArray; let indx = index;">\n            <label><input type="checkbox" (change)="onCheckBoxSelection($event, item, indx)" />{{item.text}}</label>\n          </ion-item>\n        </ion-list>\n    </div>\n  </div>\n  <label>\n    <input class="input-text" type="text"  placeholder="Type your message" (keydown)="addText($event)" [(ngModel)]="freeText" />\n  </label>\n  <button class="send-button" (click)="addTextButton()">\n    Send\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\MyDrive\Chatbox\cutePuppyPics\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//ionicBootstrap(AppModule, [Services]); 
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\MyDrive\Chatbox\cutePuppyPics\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\MyDrive\Chatbox\cutePuppyPics\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map