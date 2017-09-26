webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Mixins-->\r\n<!-- Pen Title-->\r\n<div class=\"pen-title\">\r\n        <h1>Lists</h1><span> <i class='fa fa-code'></i> by <a href='http://timokruisselbrink.com'>Timo Kruisselbrink</a></span>\r\n      </div>\r\n      <div class=\"container\" [ngClass]=\"containerClass\">\r\n        <div class=\"card\"></div>\r\n        <div class=\"card\">\r\n          <h1 class=\"title\">Login</h1>\r\n\r\n            <div class=\"input-container\">\r\n              <input [(ngModel)]=\"email\" type=\"#{type}\" id=\"#{label}\" required=\"required\"/>\r\n              <label for=\"#{label}\">Email</label>\r\n              <div class=\"bar\"></div>\r\n            </div>\r\n            <div class=\"input-container\">\r\n              <input  [(ngModel)]=\"password\" type=\"password\" id=\"#{label}\" required=\"required\"/>\r\n              <label  for=\"#{label}\">Password</label>\r\n              <div class=\"bar\"></div>\r\n            </div>\r\n            <div class=\"button-container\">\r\n              <button (click)=\"onLoggedin()\"><span>Go</span></button>\r\n            </div>\r\n            <div class=\"footer\"><a href=\"#\">Forgot your password?</a></div>\r\n\r\n        </div>\r\n        <div class=\"card alt\">\r\n          <div class=\"toggle\" (click)=\"onRegisterClick()\"></div>\r\n          <h1 class=\"title\">Register\r\n            <div class=\"close\" (click)=\"onCloseRegisterClick()\"></div>\r\n          </h1>\r\n            <div class=\"input-container\">\r\n              <input type=\"#{type}\" id=\"#{label}\" required=\"required\"/>\r\n              <label for=\"#{label}\">Username</label>\r\n              <div class=\"bar\"></div>\r\n            </div>\r\n            <div class=\"input-container\">\r\n              <input type=\"password\" id=\"#{label}\" required=\"required\"/>\r\n              <label for=\"#{label}\">Password</label>\r\n              <div class=\"bar\"></div>\r\n            </div>\r\n            <div class=\"input-container\">\r\n              <input type=\"password\" id=\"#{label}\" required=\"required\"/>\r\n              <label for=\"#{label}\">Repeat Password</label>\r\n              <div class=\"bar\"></div>\r\n            </div>\r\n            <div class=\"button-container\">\r\n              <button><span>Next</span></button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 push-md-4\">\r\n            <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\r\n            <h1>SB Admin BS4 Angular4</h1>\r\n            <form role=\"form\">\r\n                <div class=\"form-content\">\r\n                    <div class=\"form-group\">\r\n                        <input [(ngModel)]=\"email\" autofocus type=\"text\" ng-model=\"name\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\r\n                    </div>\r\n                </div>\r\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/blank-page']\" (click)=\"onLoggedin()\"> Log in </a>\r\n                &nbsp;\r\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Register</a>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #e9e9e9;\n  color: #666666;\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/* Pen Title */\n.pen-title {\n  padding: 50px 0;\n  text-align: center;\n  letter-spacing: 2px; }\n\n.pen-title h1 {\n  margin: 0 0 20px;\n  font-size: 48px;\n  font-weight: 300; }\n\n.pen-title span {\n  font-size: 12px; }\n\n.pen-title span .fa {\n  color: #00B0FF; }\n\n.pen-title span a {\n  color: #00B0FF;\n  font-weight: 600;\n  text-decoration: none; }\n\n/* Rerun */\n.rerun {\n  margin: 0 0 30px;\n  text-align: center; }\n\n.rerun a {\n  cursor: pointer;\n  display: inline-block;\n  background: #00B0FF;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px 20px;\n  color: #ffffff;\n  text-decoration: none;\n  transition: 0.3s ease; }\n\n.rerun a:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n/* Scroll To Bottom */\n#codepen, #portfolio {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #363636;\n  width: 56px;\n  height: 56px;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 0.3s ease;\n  color: #ffffff;\n  text-align: center; }\n\n#codepen i, #portfolio i {\n  line-height: 56px; }\n\n#codepen:hover, #portfolio:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n/* CodePen */\n#portfolio {\n  bottom: 96px;\n  right: 36px;\n  background: #00B0FF;\n  width: 44px;\n  height: 44px;\n  -webkit-animation: buttonFadeInUp 1s ease;\n  animation: buttonFadeInUp 1s ease; }\n\n#portfolio i {\n  line-height: 44px; }\n\n/* Container */\n.container {\n  position: relative;\n  max-width: 460px;\n  width: 100%;\n  margin: 0 auto 100px; }\n\n.container.active .card:first-child {\n  background: #f2f2f2;\n  margin: 0 15px; }\n\n.container.active .card:nth-child(2) {\n  background: #fafafa;\n  margin: 0 10px; }\n\n.container.active .card.alt {\n  top: 20px;\n  right: 0;\n  width: 100%;\n  min-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  padding: 60px 0 40px;\n  overflow: hidden; }\n\n.container.active .card.alt .toggle {\n  position: absolute;\n  top: 40px;\n  right: -70px;\n  box-shadow: none;\n  -webkit-transform: scale(10);\n  transform: scale(10);\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease; }\n\n.container.active .card.alt .toggle:before {\n  content: ''; }\n\n.container.active .card.alt .title,\n.container.active .card.alt .input-container,\n.container.active .card.alt .button-container {\n  left: 0;\n  opacity: 1;\n  visibility: visible;\n  transition: .3s ease; }\n\n.container.active .card.alt .title {\n  transition-delay: .3s; }\n\n.container.active .card.alt .input-container {\n  transition-delay: .4s; }\n\n.container.active .card.alt .input-container:nth-child(2) {\n  transition-delay: .5s; }\n\n.container.active .card.alt .input-container:nth-child(3) {\n  transition-delay: .6s; }\n\n.container.active .card.alt .button-container {\n  transition-delay: .7s; }\n\n/* Card */\n.card {\n  position: relative;\n  background: #ffffff;\n  border-radius: 5px;\n  padding: 60px 0 40px 0;\n  box-sizing: border-box;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: .3s ease;\n  /* Title */\n  /* Inputs */\n  /* Button */\n  /* Footer */\n  /* Alt Card */ }\n\n.card:first-child {\n  background: #fafafa;\n  height: 10px;\n  border-radius: 5px 5px 0 0;\n  margin: 0 10px;\n  padding: 0; }\n\n.card .title {\n  position: relative;\n  z-index: 1;\n  border-left: 5px solid #00B0FF;\n  margin: 0 0 35px;\n  padding: 10px 0 10px 50px;\n  color: #00B0FF;\n  font-size: 32px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.card .input-container {\n  position: relative;\n  margin: 0 60px 50px; }\n\n.card .input-container input {\n  outline: none;\n  z-index: 1;\n  position: relative;\n  background: none;\n  width: 100%;\n  height: 60px;\n  border: 0;\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400; }\n\n.card .input-container input:focus ~ label {\n  color: #9d9d9d;\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\n  transform: translate(-12%, -50%) scale(0.75); }\n\n.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {\n  width: 50%; }\n\n.card .input-container input:valid ~ label {\n  color: #9d9d9d;\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\n  transform: translate(-12%, -50%) scale(0.75); }\n\n.card .input-container label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #757575;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 60px;\n  transition: 0.2s ease; }\n\n.card .input-container .bar {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #757575;\n  width: 100%;\n  height: 1px; }\n\n.card .input-container .bar:before, .card .input-container .bar:after {\n  content: '';\n  position: absolute;\n  background: #00B0FF;\n  width: 0;\n  height: 2px;\n  transition: .2s ease; }\n\n.card .input-container .bar:before {\n  left: 50%; }\n\n.card .input-container .bar:after {\n  right: 50%; }\n\n.card .button-container {\n  margin: 0 60px;\n  text-align: center; }\n\n.card .button-container button {\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  background: 0;\n  width: 240px;\n  border: 2px solid #e3e3e3;\n  padding: 20px 0;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: .3s ease; }\n\n.card .button-container button span {\n  position: relative;\n  z-index: 1;\n  color: #ddd;\n  transition: .3s ease; }\n\n.card .button-container button:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  background: #00B0FF;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  margin: -15px 0 0 -15px;\n  opacity: 0;\n  transition: .3s ease; }\n\n.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {\n  border-color: #00B0FF; }\n\n.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {\n  color: #00B0FF; }\n\n.card .button-container button:active span, .card .button-container button:focus span {\n  color: #ffffff; }\n\n.card .button-container button:active:before, .card .button-container button:focus:before {\n  opacity: 1;\n  -webkit-transform: scale(10);\n  transform: scale(10); }\n\n.card .footer {\n  margin: 40px 0 0;\n  color: #d3d3d3;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: center; }\n\n.card .footer a {\n  color: inherit;\n  text-decoration: none;\n  transition: .3s ease; }\n\n.card .footer a:hover {\n  color: #bababa; }\n\n.card.alt {\n  position: absolute;\n  top: 40px;\n  right: -70px;\n  z-index: 10;\n  width: 140px;\n  height: 140px;\n  background: none;\n  border-radius: 100%;\n  box-shadow: none;\n  padding: 0;\n  transition: .3s ease;\n  /* Toggle */\n  /* Title */\n  /* Input */\n  /* Button */ }\n\n.card.alt .toggle {\n  position: relative;\n  background: #00B0FF;\n  width: 140px;\n  height: 140px;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #ffffff;\n  font-size: 58px;\n  line-height: 140px;\n  text-align: center;\n  cursor: pointer; }\n\n.card.alt .toggle:before {\n  content: '\\F040';\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.card.alt .title,\n.card.alt .input-container,\n.card.alt .button-container {\n  left: 100px;\n  opacity: 0;\n  visibility: hidden; }\n\n.card.alt .title {\n  position: relative;\n  border-color: #ffffff;\n  color: #ffffff; }\n\n.card.alt .title .close {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 60px;\n  display: inline;\n  color: #ffffff;\n  font-size: 58px;\n  font-weight: 400; }\n\n.card.alt .title .close:before {\n  content: '\\D7'; }\n\n.card.alt .input-container input {\n  color: #ffffff; }\n\n.card.alt .input-container input:focus ~ label {\n  color: #ffffff; }\n\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {\n  background: #ffffff; }\n\n.card.alt .input-container input:valid ~ label {\n  color: #ffffff; }\n\n.card.alt .input-container label {\n  color: rgba(255, 255, 255, 0.8); }\n\n.card.alt .input-container .bar {\n  background: rgba(255, 255, 255, 0.8); }\n\n.card.alt .button-container button {\n  width: 100%;\n  background: #ffffff;\n  border-color: #ffffff; }\n\n.card.alt .button-container button span {\n  color: #00B0FF; }\n\n.card.alt .button-container button:hover {\n  background: rgba(255, 255, 255, 0.9); }\n\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {\n  display: none; }\n\n/* Keyframes */\n@-webkit-keyframes buttonFadeInUp {\n  0% {\n    bottom: 30px;\n    opacity: 0; } }\n\n@keyframes buttonFadeInUp {\n  0% {\n    bottom: 30px;\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.email = 'timokruisselbrink@hotmail.com';
        this.password = 'test123';
        this.containerClass = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onRegisterClick = function () {
        this.containerClass = "active";
    };
    LoginComponent.prototype.onCloseRegisterClick = function () {
        this.containerClass = "";
    };
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (result) {
            _this.router.navigate(["/blank-page"]);
        }).catch(function (result) {
            //todo
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map