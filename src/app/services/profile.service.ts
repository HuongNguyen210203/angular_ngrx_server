import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile.model";
import {getAllProfiles} from "../ngrx/profile/profile.action";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:3003/profile/all';
  profiles: Profile[] = [];

  // constructor(private http: HttpClient) {
  //   this.http.get(`${this.url}`).subscribe((data) => {
  //     this.profiles = data as Profile[];
  //     console.log(data);
  //   })
  // }
  constructor(private http: HttpClient) {}

    getAllProfiles(){
      return this.http.get<Profile[]>(`${this.url}`);

  }

  // getAllProfiles(){
  //   return this.http.get('http://localhost:3003/profile/all');
  // }

  createProfile(profile: Profile){
    return this.http.post('http://localhost:3003/profile', profile);
  }

  deleteProfile(id: string){
    return this.http.delete(`http://localhost:3003/profile/${id}`);
  }

  updateProfile(id: string, profile: Profile){
    return this.http.put(`http://localhost:3003/profile/${id}`, profile);
  }
}
