import {Component} from 'angular2/core';
@Component({
    templateUrl:'/app/upload.component.html',
    styles:[`
     .h1{
        font-size: 3em;
        font-weight: 300;
    }
    .hr{
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        border-style: inset;
        border-width: 1px;
    }
    `]
})
export class UploadComponent{
        departs;
        onSubmit(form){
        console.log(form);
    }
    
}