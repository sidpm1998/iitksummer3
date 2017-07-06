
import {Component} from 'angular2/core'
import {FileService} from './file.service'
import {FileComponent} from './file.component'

@Component({
    selector: 'files',
    template: `
        <div *ngFor="#file of files">
            <file [data]="file"></file>
        </div>
    `,
    providers: [FileService],
    directives: [FileComponent]
})
export class FilesComponent {
    files: any[];
    
    constructor(fileService: FileService) {
        this.files = fileService.getFiles();
    }
} 