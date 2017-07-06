
import {Component} from 'angular2/core'
import {ProfileService} from './profile.service'
import {ProfileComponent} from './profile.component'

@Component({
    selector: 'profiles',
    template: `
        <div *ngFor="#profile of profiles">
            <profile [data]="profile"></profile>
        </div>
    `,
    providers: [ProfileService],
    directives: [ProfileComponent]
})
export class FilesComponent {
    profiles: any[];
    
    constructor(profileService: ProfileService) {
        this.profiles = profileService.getProfile();
    }
} 