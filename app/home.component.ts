import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UserService} from './user.service';
import {OnInit} from 'angular2/core';
@Component({
    templateUrl: '/app/home.component.html',
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
    .card {
    padding-top: 20px;
    margin: 10px 0px 20px 0px;
    background-color: rgba(214, 224, 226, 0.2);
    border-top-width: 0;
    border-bottom-width: 2px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    }

    .card .card-heading {
        padding: 0 20px;
        margin: 0;
    }

    .card .card-heading.simple {
        font-size: 20px;
        font-weight: 300;
        color: #777;
        border-bottom: 1px solid #e5e5e5;
    }

    .card .card-heading.image img {
        display: inline-block;
        width: 46px;
        height: 46px;
        margin-right: 15px;
        vertical-align: top;
        border: 0;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .card .card-heading.image .card-heading-header {
        display: inline-block;
        vertical-align: top;
    }

    .card .card-heading.image .card-heading-header h3 {
        margin: 0;
        font-size: 14px;
        line-height: 16px;
        color: #262626;
    }

    .card .card-heading.image .card-heading-header span {
        font-size: 12px;
        color: #999999;
    }

    .card .card-body {
        padding: 0 20px;
        margin-top: 20px;
    }

    .card .card-media {
        padding: 0 20px;
        margin: 0 -14px;
    }

    .card .card-media img {
        max-width: 100%;
        max-height: 100%;
    }

    .card .card-actions {
        min-height: 30px;
        padding: 0 20px 20px 20px;
        margin: 20px 0 0 0;
    }

    .card .card-comments {
        padding: 20px;
        margin: 0;
        background-color: #f8f8f8;
    }

    .card .card-comments .comments-collapse-toggle {
        padding: 0;
        margin: 0 20px 12px 20px;
    }

    .card .card-comments .comments-collapse-toggle a,
    .card .card-comments .comments-collapse-toggle span {
        padding-right: 5px;
        overflow: hidden;
        font-size: 12px;
        color: #999;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .card-comments .media-heading {
        font-size: 13px;
        font-weight: bold;
    }

    .card.people {
        position: relative;
        display: inline-block;
        width: 170px;
        height: 300px;
        padding-top: 0;
        margin-left: 20px;
        overflow: hidden;
        vertical-align: top;
    }

    .card.people:first-child {
        margin-left: 0;
    }

    .card.people .card-top {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 170px;
        height: 150px;
        background-color: #ffffff;
    }

    .card.people .card-top.green {
        background-color: #53a93f;
    }

    .card.people .card-top.blue {
        background-color: #427fed;
    }

    .card.people .card-info {
        position: absolute;
        top: 150px;
        display: inline-block;
        width: 100%;
        height: 101px;
        overflow: hidden;
        background: #ffffff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .card.people .card-info .title {
        display: block;
        margin: 8px 14px 0 14px;
        overflow: hidden;
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
        color: #404040;
    }

    .card.people .card-info .desc {
        display: block;
        margin: 8px 14px 0 14px;
        overflow: hidden;
        font-size: 12px;
        line-height: 16px;
        color: #737373;
        text-overflow: ellipsis;
    }

    .card.people .card-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        display: inline-block;
        width: 100%;
        padding: 10px 20px;
        line-height: 29px;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .card.hovercard {
        position: relative;
        padding-top: 0;
        overflow: hidden;
        text-align: center;
        background-color: rgba(214, 224, 226, 0.2);
    }

    .card.hovercard .cardheader {
        background: url("/app/iitk.jpg");
        background-size: cover;
        height: 135px;
    }

    .card.hovercard .avatar {
        position: relative;
        top: -50px;
        margin-bottom: -50px;
    }

    .card.hovercard .avatar img {
        width: 100px;
        height: 100px;
        max-width: 100px;
        max-height: 100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid rgba(255,255,255,0.5);
    }

    .card.hovercard .info {
        padding: 4px 8px 10px;
    }

    .card.hovercard .info .title {
        margin-bottom: 4px;
        font-size: 24px;
        line-height: 1;
        color: #262626;
        vertical-align: middle;
    }

    .card.hovercard .info .desc {
        overflow: hidden;
        font-size: 12px;
        line-height: 20px;
        color: #737373;
        text-overflow: ellipsis;
    }

    .card.hovercard .bottom {
        padding: 0 20px;
        margin-bottom: 17px;
    }

    .btn{ border-radius: 50%; width:32px; height:32px; line-height:18px;  }
    `],
    providers:[HTTP_PROVIDERS,UserService],
    directives:[ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit{
    usersname:string;
    rollno:number;
    depart:string;
    uploads:number;
    downloads:number;
    userimage:"/app/profilepic.jpg"
    constructor (private _userservice: UserService){                
    }
    ngOnInit(){
        this._userservice.getUsers()
        .subscribe(users=>(this.usersname=users[0].name,this.rollno=users[0].id,this.uploads=users[0].id,this.downloads=users[0].id,this.depart=users[0].email));
    }
}