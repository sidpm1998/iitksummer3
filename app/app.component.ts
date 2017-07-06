import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

import {ContactComponent} from './contact.component';
import {UploadComponent} from './upload.component';
import {HomeComponent} from './home.component';
import {ExploreComponent} from './explore.component';
import {SearchComponent} from './search.component';
@RouteConfig([
    {path:'/home',name: 'Home',component:HomeComponent,useAsDefault:true},
    {path:'/contact',name: 'Contact',component:ContactComponent},
    {path:'/upload',name: 'Upload',component:UploadComponent},
    {path:'/explore',name: 'Explore',component:ExploreComponent},
    {path:'/search',name: 'Search',component:SearchComponent},
    {path:'/*other',name:'Other',redirectTo:['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives:[ROUTER_DIRECTIVES],
    styles:[`
    .header {
        width:100%;
        background: url(/app/iitk.jpg);
        background-size: cover;
        height:250px;
    }
    .header h1{
        font-size: 3em;
        font-weight: 300;
    }
    .header h2{
        font-weight:300;
        color:#ccc;
        padding:0;        
    }
    `]
   
})
export class AppComponent {
   
}