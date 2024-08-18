import {createAction, props} from "@ngrx/store";
import {Profile} from "../../models/profile.model";

//get
export const getAllProfiles = createAction('[Profile] Get All Profiles');
export const getAllProfilesSuccess = createAction('[Profile] Get All Profiles Success', (props<{ profiles: Profile[] }>()));
export const getAllProfilesFailure = createAction('[Profile] Get All Profiles Failure', (props<{error: string}>()));
//create
export const createProfile = createAction('[Profile] Create Profile', props<{profile: Profile}>());
export const createProfileSuccess = createAction('[Profile] Create Profile Success', (props<{profile: Profile}>()));
export const createProfileFailure = createAction('[Profile] Create Profile Failure', (props<{error: string}>()));
//delete
export const deleteProfile = createAction('[Profile] Delete Profile', props<{id: string}>());
export const deleteProfileSuccess = createAction('[Profile] Delete Profile Success', (props<{id: string}>()));
export const deleteProfileFailure = createAction('[Profile] Delete Profile Failure', (props<{error: string}>()));
//update
export const updateProfile = createAction('[Profile] Update Profile', props<{id: string, profile: Profile}>());
export const updateProfileSuccess = createAction('[Profile] Update Profile Success', (props<{id:string, profile: Profile}>()));
export const updateProfileFailure = createAction('[Profile] Update Profile Failure', (props<{error: string}>()));
