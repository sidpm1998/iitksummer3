import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UserService {
    private _url="https://jsonplaceholder.typicode.com/users"
    constructor(private _http: Http){

    }
    getUsers(): Observable <User[]>{
        return this._http.get(this._url)
        .map(res=>res.json());    
    }
    createUser(user:User){
        return this._http.post(this._url, JSON.stringify(user))
        .map(res=>res.json());
    }

}