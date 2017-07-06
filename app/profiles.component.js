System.register(['angular2/core', './profile.service', './profile.component'], function(exports_1, context_1) {
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
    var core_1, profile_service_1, profile_component_1;
    var FilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            FilesComponent = (function () {
                function FilesComponent(profileService) {
                    this.profiles = profileService.getProfile();
                }
                FilesComponent = __decorate([
                    core_1.Component({
                        selector: 'profiles',
                        template: "\n        <div *ngFor=\"#profile of profiles\">\n            <profile [data]=\"profile\"></profile>\n        </div>\n    ",
                        providers: [profile_service_1.ProfileService],
                        directives: [profile_component_1.ProfileComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof profile_service_1.ProfileService !== 'undefined' && profile_service_1.ProfileService) === 'function' && _a) || Object])
                ], FilesComponent);
                return FilesComponent;
                var _a;
            }());
            exports_1("FilesComponent", FilesComponent);
        }
    }
});
//# sourceMappingURL=profiles.component.js.map