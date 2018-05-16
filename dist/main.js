(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header style=\"color: yellowgreen ; background-color:brown ; text-align:center\" >\r\n  <h1>School management System</h1>\r\n</header>\r\n<div>\r\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\r\n    <div style=\"color: aqua; font-size : 300; background-color: darkkhaki\">\r\n      <a class=\"btn btn-dark\" (click)=\"home()\">Home</a>\r\n      <a class=\"btn btn-dark\" (click)=\"course()\">course</a>\r\n      <a class=\"btn btn-dark\" (click)=\"student()\">student</a>\r\n      <a class=\"btn btn-dark\" (click)=\"subject()\">Subject</a>\r\n      <a class=\"btn btn-dark\" (click)=\"teacher()\">Teacher</a>\r\n    </div>\r\n  </nav>\r\n  <div *ngIf=\"homepage\">\r\n    <app-home></app-home>\r\n  </div>\r\n  <div *ngIf=\"coursepage\">\r\n    <app-courses></app-courses>\r\n  </div>\r\n  <div *ngIf=\"studentpage\">\r\n    <app-students></app-students>\r\n  </div>\r\n  <div *ngIf=\"subjectpage\">\r\n    <app-subjects></app-subjects>\r\n  </div>\r\n  <div *ngIf=\"teacherpage\">\r\n    <app-teachers></app-teachers>\r\n  </div>\r\n</div>\r\n<footer>\r\n  <h6>Copyright @Mridul Garg</h6>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SMD';
        this.homepage = false;
        this.coursepage = false;
        this.studentpage = false;
        this.subjectpage = false;
        this.teacherpage = false;
    }
    AppComponent.prototype.home = function () {
        this.homepage = true;
        this.coursepage = false;
        this.studentpage = false;
        this.subjectpage = false;
        this.teacherpage = false;
    };
    AppComponent.prototype.course = function () {
        this.homepage = false;
        this.coursepage = true;
        this.studentpage = false;
        this.subjectpage = false;
        this.teacherpage = false;
    };
    AppComponent.prototype.student = function () {
        this.homepage = false;
        this.coursepage = false;
        this.studentpage = true;
        this.subjectpage = false;
        this.teacherpage = false;
    };
    AppComponent.prototype.subject = function () {
        this.homepage = false;
        this.coursepage = false;
        this.studentpage = false;
        this.subjectpage = true;
        this.teacherpage = false;
    };
    AppComponent.prototype.teacher = function () {
        this.homepage = false;
        this.coursepage = false;
        this.studentpage = false;
        this.subjectpage = false;
        this.teacherpage = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students/students.component */ "./src/app/students/students.component.ts");
/* harmony import */ var _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subjects/subjects.component */ "./src/app/subjects/subjects.component.ts");
/* harmony import */ var _teachers_teachers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teachers/teachers.component */ "./src/app/teachers/teachers.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course.service */ "./src/app/course.service.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student.service */ "./src/app/student.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject.service.ts");
/* harmony import */ var _teacher_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher.service */ "./src/app/teacher.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"],
                _students_students_component__WEBPACK_IMPORTED_MODULE_5__["StudentsComponent"],
                _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_6__["SubjectsComponent"],
                _teachers_teachers_component__WEBPACK_IMPORTED_MODULE_7__["TeachersComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_course_service__WEBPACK_IMPORTED_MODULE_9__["CourseService"], _student_service__WEBPACK_IMPORTED_MODULE_10__["StudentService"], _subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"], _teacher_service__WEBPACK_IMPORTED_MODULE_12__["TeacherService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course.service.ts":
/*!***********************************!*\
  !*** ./src/app/course.service.ts ***!
  \***********************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.BASE_URL = 'https://lmsmridul.herokuapp.com/course/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
            })
        };
    }
    CourseService.prototype.getCourses = function () {
        return this.http.get(this.BASE_URL);
    };
    CourseService.prototype.postCourse = function (coursename) {
        var cname = {
            'name': coursename
        };
        return this.http.post(this.BASE_URL, cname, this.httpOptions);
    };
    CourseService.prototype.getBatches = function () {
        return this.http.get(this.BASE_URL + "batches");
    };
    CourseService.prototype.postBatch = function (name, id) {
        var newBatch = {
            'name': name
        };
        return this.http.post(this.BASE_URL + id + '/batches', newBatch, this.httpOptions);
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">Course List</div>\r\n    <div class=\"panel-body\">\r\n<div class=\"card-body\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n    <th>S.no</th>\r\n    <th>Courses</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let c of courseList\">\r\n        <td>{{c.id}}</td>\r\n        <td>{{c.name}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Add New Course Here\r\n    </div>\r\n    <div class=\"panel-body\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Course Name</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\"  #cname>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" (click)=\"addCourse(cname.value)\">Submit</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <br>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        Batch List\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <th>S.no</th>\r\n          <th>Batches</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let c of batchList\">\r\n              <td>{{c.id}}</td>\r\n              <td>{{c.name}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<br>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        Add new Batch\r\n      </div>\r\n      <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Batch Name</label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control\" required #name>\r\n        </div>\r\n        <select class=\"form-control\" #courseId>\r\n          <option selected>Select Course</option>\r\n          <option *ngFor =\"let c of courseList\" [value]=\"c.id\">{{c.name}}</option>\r\n        </select>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" (click)=\"addBatch(name.value,courseId.value)\">Submit</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../course.service */ "./src/app/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(data) {
        this.data = data;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getCourses()
            .subscribe(function (res) {
            console.log("hello");
            console.log(res);
            _this.courseList = res;
        });
        this.data.getBatches()
            .subscribe(function (res) {
            console.log(res);
            _this.batchList = res;
        });
    };
    CoursesComponent.prototype.addCourse = function (name) {
        console.log(name + "name is here");
        this.data.postCourse(name)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    CoursesComponent.prototype.addBatch = function (name, id) {
        console.log(name);
        console.log(id);
        var newBatch = {
            'name': name,
            'id': id
        };
        this.data.postBatch(name, id)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\r\n  <h3>Welcome To School Management System</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.BASE_URL = 'https://lmsmridul.herokuapp.com/student/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
            })
        };
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.BASE_URL);
    };
    StudentService.prototype.postStudent = function (newStudent) {
        console.log(newStudent);
        return this.http.post(this.BASE_URL, newStudent, this.httpOptions);
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/*!*************************************************!*\
  !*** ./src/app/students/students.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/students/students.component.html":
/*!**************************************************!*\
  !*** ./src/app/students/students.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Student List\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n        <th>S.no</th>\r\n        <th>student</th>\r\n        <th>Batch</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let s of studentlist\">\r\n            <td>{{s.id}}</td>\r\n            <td>{{s.name}}</td>\r\n            <td>{{s.batches[0].name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      ADD Student\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Student Name</label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control\" required #inp>\r\n        </div>\r\n        <select class=\"form-control\" #courseId>\r\n          <option selected>Select Course</option>\r\n          <option *ngFor =\"let c of courselist\" [value]=\"c.id\">{{c.name}}</option>\r\n        </select>\r\n        <br>\r\n        <select class=\"form-control\" #batchId>\r\n          <option selected>Select Batch</option>\r\n          <option *ngFor =\"let c of batchlist\" [value]=\"c.id\">{{c.name}}</option>\r\n        </select>\r\n        <br>\r\n        <div class=\"form-check\">\r\n          <button class=\"btn btn-primary\" (click)=\"addStudent(inp.value,batchId.value,courseId.value)\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
  \************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course.service */ "./src/app/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(data, bdata) {
        this.data = data;
        this.bdata = bdata;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getStudents()
            .subscribe(function (res) {
            console.log(res);
            _this.studentlist = res;
        });
        this.bdata.getBatches()
            .subscribe(function (res) {
            console.log(res);
            _this.batchlist = res;
        });
        this.bdata.getCourses()
            .subscribe(function (res) {
            console.log(res);
            _this.courselist = res;
        });
    };
    StudentsComponent.prototype.addStudent = function (name, cid, bid) {
        console.log(name);
        console.log(bid);
        console.log(cid);
        var newStudent = {
            'name': name,
            'cid': cid,
            'bid': bid
        };
        this.data.postStudent(newStudent)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"], _course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/subject.service.ts":
/*!************************************!*\
  !*** ./src/app/subject.service.ts ***!
  \************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
        this.BASE_URL = 'https://lmsmridul.herokuapp.com/subject';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
            })
        };
    }
    SubjectService.prototype.getSubjects = function () {
        return this.http.get(this.BASE_URL);
    };
    SubjectService.prototype.postSubject = function (newSubject) {
        return this.http.post(this.BASE_URL, newSubject, this.httpOptions);
    };
    SubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/subjects/subjects.component.css":
/*!*************************************************!*\
  !*** ./src/app/subjects/subjects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subjects/subjects.component.html":
/*!**************************************************!*\
  !*** ./src/app/subjects/subjects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Subject List\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n        <th>S.no</th>\r\n        <th>Course</th>\r\n        <th>Subject</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let s of subjectlist\">\r\n            <td>{{s.id}}</td>\r\n            <td>{{s.course.name}}</td>\r\n            <td>{{s.name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\" >\r\n    <div class=\"panel-heading\">\r\n      ADD Subjects\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Subject Name</label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control\" required #inp>\r\n        </div>\r\n        <select class=\"form-control\" #courseId>\r\n          <option selected>Select Course</option>\r\n          <option *ngFor =\"let c of courselist\" [value]=\"c.id\">{{c.name}}</option>\r\n        </select>\r\n        <br>\r\n        <div class=\"form-check\">\r\n          <button class=\"btn btn-primary\" (click)=\"addSubject(inp.value,courseId.value)\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/subjects/subjects.component.ts":
/*!************************************************!*\
  !*** ./src/app/subjects/subjects.component.ts ***!
  \************************************************/
/*! exports provided: SubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function() { return SubjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subject.service */ "./src/app/subject.service.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course.service */ "./src/app/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectsComponent = /** @class */ (function () {
    function SubjectsComponent(sdata, cdata) {
        this.sdata = sdata;
        this.cdata = cdata;
    }
    SubjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sdata.getSubjects()
            .subscribe(function (res) {
            console.log(res);
            _this.subjectlist = res;
        });
        this.cdata.getCourses()
            .subscribe(function (res) {
            console.log(res);
            _this.courselist = res;
        });
    };
    SubjectsComponent.prototype.addSubject = function (name, cid) {
        console.log(name);
        console.log(cid);
        var newSubject = {
            'name': name,
            'cid': cid
        };
        this.sdata.postSubject(newSubject)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    SubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subjects',
            template: __webpack_require__(/*! ./subjects.component.html */ "./src/app/subjects/subjects.component.html"),
            styles: [__webpack_require__(/*! ./subjects.component.css */ "./src/app/subjects/subjects.component.css")]
        }),
        __metadata("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"], _course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])
    ], SubjectsComponent);
    return SubjectsComponent;
}());



/***/ }),

/***/ "./src/app/teacher.service.ts":
/*!************************************!*\
  !*** ./src/app/teacher.service.ts ***!
  \************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherService = /** @class */ (function () {
    function TeacherService(http) {
        this.http = http;
        this.BASE_URL = 'https://lmsmridul.herokuapp.com/teacher/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
            })
        };
    }
    TeacherService.prototype.getTeachers = function () {
        return this.http.get(this.BASE_URL);
    };
    TeacherService.prototype.postTeachers = function (newTeacher) {
        return this.http.post(this.BASE_URL, newTeacher, this.httpOptions);
    };
    TeacherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/app/teachers/teachers.component.css":
/*!*************************************************!*\
  !*** ./src/app/teachers/teachers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teachers/teachers.component.html":
/*!**************************************************!*\
  !*** ./src/app/teachers/teachers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Teacher List\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n        <th>S.no</th>\r\n        <th>subject</th>\r\n        <th>Teacher</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let s of teacherlist\">\r\n            <td>{{s.id}}</td>\r\n            <td>{{s.subject.name}}</td>\r\n            <td>{{s.name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      ADD Teacher\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Teacher Name</label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control\" required #inp>\r\n        </div>\r\n        <select class=\"form-control\" #courseId>\r\n          <option selected>Select Subject</option>\r\n          <option *ngFor =\"let c of subjectlist\" [value]=\"c.id\">{{c.name}}</option>\r\n        </select>\r\n        <br>\r\n        <div class=\"form-check\">\r\n          <button class=\"btn btn-primary\" (click)=\"addTeacher(inp.value,courseId.value)\">Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/teachers/teachers.component.ts":
/*!************************************************!*\
  !*** ./src/app/teachers/teachers.component.ts ***!
  \************************************************/
/*! exports provided: TeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersComponent", function() { return TeachersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subject.service */ "./src/app/subject.service.ts");
/* harmony import */ var _teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teacher.service */ "./src/app/teacher.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(sdata, tdata) {
        this.sdata = sdata;
        this.tdata = tdata;
    }
    TeachersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tdata.getTeachers()
            .subscribe(function (res) {
            console.log(res);
            _this.teacherlist = res;
        });
        this.sdata.getSubjects()
            .subscribe(function (res) {
            console.log(res);
            _this.subjectlist = res;
        });
    };
    TeachersComponent.prototype.addTeacher = function (name, sid) {
        console.log(name);
        console.log(sid);
        var newTeacher = {
            'name': name,
            'sid': sid
        };
        this.tdata.postTeachers(newTeacher)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    TeachersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teachers',
            template: __webpack_require__(/*! ./teachers.component.html */ "./src/app/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.css */ "./src/app/teachers/teachers.component.css")]
        }),
        __metadata("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"], _teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"]])
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mridulgarg\Desktop\evaluation-2\lms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map