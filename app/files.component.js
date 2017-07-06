System.register(['angular2/core', './file.service', './file.component'], function(exports_1, context_1) {
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
    var core_1, file_service_1, file_component_1;
    var FilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (file_service_1_1) {
                file_service_1 = file_service_1_1;
            },
            function (file_component_1_1) {
                file_component_1 = file_component_1_1;
            }],
        execute: function() {
            FilesComponent = (function () {
                function FilesComponent(fileService) {
                    this.files = fileService.getFiles();
                }
                FilesComponent = __decorate([
                    core_1.Component({
                        selector: 'files',
                        template: "\n        <div *ngFor=\"#file of files\">\n            <file [data]=\"file\"></file>\n        </div>\n    ",
                        providers: [file_service_1.FileService],
                        directives: [file_component_1.FileComponent]
                    }), 
                    __metadata('design:paramtypes', [file_service_1.FileService])
                ], FilesComponent);
                return FilesComponent;
            }());
            exports_1("FilesComponent", FilesComponent);
        }
    }
});
//# sourceMappingURL=files.component.js.map