import {ProfileState} from "./profile.state";
import * as ProfileActions from "./profile.action";
import {createReducer, on} from "@ngrx/store";
import {state} from "@angular/animations";

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isLoading: false,
  error: ''
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
      error: ''
    };
  }),
  on(ProfileActions.getAllProfilesSuccess, (state, {profiles})=>{
    return{
      ...state,
      isLoading: false,
      profiles: profiles
    };
  }),
  on(ProfileActions.getAllProfilesFailure, (state, error)=>{
    return{
      ...state,
      isLoading: false,
      error: error.error
    };
  }),
  on(ProfileActions.createProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: ''
    };
  }),
  on(ProfileActions.createProfileSuccess, (state, {profile})=>{
    return{
      ...state,
      isLoading: false,
      profile: profile
    };
  }),
  on(ProfileActions.createProfileFailure, (state, error)=>{
    return{
      ...state,
      isLoading: false,
      error: error.error
    };
  }),
  on(ProfileActions.deleteProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: ''
    };
  }),
  on(ProfileActions.deleteProfileSuccess, (state, {id})=>{
    return{
      ...state,
      isLoading: false,
      profiles: state.profiles.filter(profile => profile.id !== id)
    };
  }),
  on(ProfileActions.deleteProfileFailure, (state, error)=>{
    return{
      ...state,
      isLoading: false,
      error: error.error
    };
  }),
  on(ProfileActions.updateProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: ''
    };
  }),
  on(ProfileActions.updateProfileSuccess, (state, {id, profile})=>{
    return{
      ...state,
      isLoading: false,
      profiles: state.profiles.map(profile => profile.id === id ? profile : profile)
    };
  }),
  on(ProfileActions.updateProfileFailure, (state, error)=>{
    return{
      ...state,
      isLoading: false,
      error: error.error
    };
  }),
)
