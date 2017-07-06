import {Component} from 'angular2/core';
import {FileComponent} from './file.component'
import {FileService} from './file.service'

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div class="header">
            <h1> Explore </h1>
            <h2> All files at one place</h2>
            <hr width="100%" ><br>
        </div>
        <div *ngFor="#file of files">
            <file [data]="file"></file>
        </div>
    `,
    directives: [FileComponent],
    providers: [FileService],
    styles:[`
    .header h1{
        font-size: 3em;
        font-weight: 300;
    }
    .header h2{
        font-weight:300;
        color:#ccc;
        padding:0;      
    .header hr{
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        border-style: inset;
        border-width: 1px;
    }  
    }        
    `]
})
export class ExploreComponent {
    files: any[];    
    constructor(fileService: FileService){
        this.files = fileService.getFiles();
    }
}