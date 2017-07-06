System.register(['angular2/core', 'angular2/http', 'angular2/router', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, user_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_userservice) {
                    this._userservice = _userservice;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userservice.getUsers()
                        .subscribe(function (users) { return (_this.usersname = users[0].name, _this.rollno = users[0].id, _this.uploads = users[0].id, _this.downloads = users[0].id, _this.depart = users[0].email); });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/home.component.html',
                        styles: ["\n    .h1{\n        font-size: 3em;\n        font-weight: 300;\n    }\n    .hr{\n        display: block;\n        margin-top: 0.5em;\n        margin-bottom: 0.5em;\n        margin-left: auto;\n        margin-right: auto;\n        border-style: inset;\n        border-width: 1px;\n    }\n    .card {\n    padding-top: 20px;\n    margin: 10px 0px 20px 0px;\n    background-color: rgba(214, 224, 226, 0.2);\n    border-top-width: 0;\n    border-bottom-width: 2px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    }\n\n    .card .card-heading {\n        padding: 0 20px;\n        margin: 0;\n    }\n\n    .card .card-heading.simple {\n        font-size: 20px;\n        font-weight: 300;\n        color: #777;\n        border-bottom: 1px solid #e5e5e5;\n    }\n\n    .card .card-heading.image img {\n        display: inline-block;\n        width: 46px;\n        height: 46px;\n        margin-right: 15px;\n        vertical-align: top;\n        border: 0;\n        -webkit-border-radius: 50%;\n        -moz-border-radius: 50%;\n        border-radius: 50%;\n    }\n\n    .card .card-heading.image .card-heading-header {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    .card .card-heading.image .card-heading-header h3 {\n        margin: 0;\n        font-size: 14px;\n        line-height: 16px;\n        color: #262626;\n    }\n\n    .card .card-heading.image .card-heading-header span {\n        font-size: 12px;\n        color: #999999;\n    }\n\n    .card .card-body {\n        padding: 0 20px;\n        margin-top: 20px;\n    }\n\n    .card .card-media {\n        padding: 0 20px;\n        margin: 0 -14px;\n    }\n\n    .card .card-media img {\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n    .card .card-actions {\n        min-height: 30px;\n        padding: 0 20px 20px 20px;\n        margin: 20px 0 0 0;\n    }\n\n    .card .card-comments {\n        padding: 20px;\n        margin: 0;\n        background-color: #f8f8f8;\n    }\n\n    .card .card-comments .comments-collapse-toggle {\n        padding: 0;\n        margin: 0 20px 12px 20px;\n    }\n\n    .card .card-comments .comments-collapse-toggle a,\n    .card .card-comments .comments-collapse-toggle span {\n        padding-right: 5px;\n        overflow: hidden;\n        font-size: 12px;\n        color: #999;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n\n    .card-comments .media-heading {\n        font-size: 13px;\n        font-weight: bold;\n    }\n\n    .card.people {\n        position: relative;\n        display: inline-block;\n        width: 170px;\n        height: 300px;\n        padding-top: 0;\n        margin-left: 20px;\n        overflow: hidden;\n        vertical-align: top;\n    }\n\n    .card.people:first-child {\n        margin-left: 0;\n    }\n\n    .card.people .card-top {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: inline-block;\n        width: 170px;\n        height: 150px;\n        background-color: #ffffff;\n    }\n\n    .card.people .card-top.green {\n        background-color: #53a93f;\n    }\n\n    .card.people .card-top.blue {\n        background-color: #427fed;\n    }\n\n    .card.people .card-info {\n        position: absolute;\n        top: 150px;\n        display: inline-block;\n        width: 100%;\n        height: 101px;\n        overflow: hidden;\n        background: #ffffff;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    .card.people .card-info .title {\n        display: block;\n        margin: 8px 14px 0 14px;\n        overflow: hidden;\n        font-size: 16px;\n        font-weight: bold;\n        line-height: 18px;\n        color: #404040;\n    }\n\n    .card.people .card-info .desc {\n        display: block;\n        margin: 8px 14px 0 14px;\n        overflow: hidden;\n        font-size: 12px;\n        line-height: 16px;\n        color: #737373;\n        text-overflow: ellipsis;\n    }\n\n    .card.people .card-bottom {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        display: inline-block;\n        width: 100%;\n        padding: 10px 20px;\n        line-height: 29px;\n        text-align: center;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    .card.hovercard {\n        position: relative;\n        padding-top: 0;\n        overflow: hidden;\n        text-align: center;\n        background-color: rgba(214, 224, 226, 0.2);\n    }\n\n    .card.hovercard .cardheader {\n        background: url(\"/app/iitk.jpg\");\n        background-size: cover;\n        height: 135px;\n    }\n\n    .card.hovercard .avatar {\n        position: relative;\n        top: -50px;\n        margin-bottom: -50px;\n    }\n\n    .card.hovercard .avatar img {\n        width: 100px;\n        height: 100px;\n        max-width: 100px;\n        max-height: 100px;\n        -webkit-border-radius: 50%;\n        -moz-border-radius: 50%;\n        border-radius: 50%;\n        border: 5px solid rgba(255,255,255,0.5);\n    }\n\n    .card.hovercard .info {\n        padding: 4px 8px 10px;\n    }\n\n    .card.hovercard .info .title {\n        margin-bottom: 4px;\n        font-size: 24px;\n        line-height: 1;\n        color: #262626;\n        vertical-align: middle;\n    }\n\n    .card.hovercard .info .desc {\n        overflow: hidden;\n        font-size: 12px;\n        line-height: 20px;\n        color: #737373;\n        text-overflow: ellipsis;\n    }\n\n    .card.hovercard .bottom {\n        padding: 0 20px;\n        margin-bottom: 17px;\n    }\n\n    .btn{ border-radius: 50%; width:32px; height:32px; line-height:18px;  }\n    "],
                        providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map