import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './models/profile.model';
import { ProfileService } from './services/profile.service';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // listProfile: Profile[] = [];
  // listProfile2: Profile[] = [];
  title = 'angular-nestjs';

  // constructor(public profileService: ProfileService) {
  //   this.profileService.getAllProfiles().subscribe((profiles: Profile[] | any) => {
  //     console.log(profiles);
  //     profiles.forEach((profile: Profile) => {
  //       this.listProfile.push(profile);
  //     });
  //   });
    // this.profileService.getAllProfiles().subscribe((data : Profile[]| any) => {
    //   console.log(data);
    //   data.forEach((data: Profile) => {
    //     this.listProfile2.push(data);
    //   });
    // });



  // }

  // protected readonly ProfileService = ProfileService;
  constructor(public profileService: ProfileService) {
  }
}
