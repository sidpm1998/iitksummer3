System.register(['angular2/core', 'angular2/router', './contact.component', './upload.component', './home.component', './explore.component', './search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_component_1, upload_component_1, home_component_1, explore_component_1, search_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (upload_component_1_1) {
                upload_component_1 = upload_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (explore_component_1_1) {
                explore_component_1 = explore_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent },
                        { path: '/upload', name: 'Upload', component: upload_component_1.UploadComponent },
                        { path: '/explore', name: 'Explore', component: explore_component_1.ExploreComponent },
                        { path: '/search', name: 'Search', component: search_component_1.SearchComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: ["\n    .header {\n        width:100%;\n        background: url(/app/iitk.jpg);\n        background-size: cover;\n        height:250px;\n    }\n    .header h1{\n        font-size: 3em;\n        font-weight: 300;\n    }\n    .header h2{\n        font-weight:300;\n        color:#ccc;\n        padding:0;        \n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map