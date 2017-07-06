System.register(['angular2/core', './file.component', './file.service'], function(exports_1, context_1) {
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
    var core_1, file_component_1, file_service_1;
    var ExploreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (file_component_1_1) {
                file_component_1 = file_component_1_1;
            },
            function (file_service_1_1) {
                file_service_1 = file_service_1_1;
            }],
        execute: function() {
            ExploreComponent = (function () {
                function ExploreComponent(fileService) {
                    this.files = fileService.getFiles();
                }
                ExploreComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <div class=\"header\">\n            <h1> Explore </h1>\n            <h2> All files at one place</h2>\n            <hr width=\"100%\" ><br>\n        </div>\n        <div *ngFor=\"#file of files\">\n            <file [data]=\"file\"></file>\n        </div>\n    ",
                        directives: [file_component_1.FileComponent],
                        providers: [file_service_1.FileService],
                        styles: ["\n    .header h1{\n        font-size: 3em;\n        font-weight: 300;\n    }\n    .header h2{\n        font-weight:300;\n        color:#ccc;\n        padding:0;      \n    .header hr{\n        display: block;\n        margin-top: 0.5em;\n        margin-bottom: 0.5em;\n        margin-left: auto;\n        margin-right: auto;\n        border-style: inset;\n        border-width: 1px;\n    }  \n    }        \n    "]
                    }), 
                    __metadata('design:paramtypes', [file_service_1.FileService])
                ], ExploreComponent);
                return ExploreComponent;
            }());
            exports_1("ExploreComponent", ExploreComponent);
        }
    }
});
//# sourceMappingURL=explore.component.js.map