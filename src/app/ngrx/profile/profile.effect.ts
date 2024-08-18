import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProfileService } from "../../services/profile.service";
import * as ProfileActions from "./profile.action";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private profileService: ProfileService) {}

  getAllProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getAllProfiles),
      mergeMap(() => {
        return this.profileService.getAllProfiles().pipe(
          map(profiles => ProfileActions.getAllProfilesSuccess({profiles: profiles})),
          catchError(error => of(ProfileActions.getAllProfilesFailure({error: error})))
        )
      })
    )
  );

  createProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.createProfile),
      mergeMap(({ profile }) =>
        this.profileService.createProfile(profile).pipe(
          map(() => ProfileActions.createProfileSuccess({ profile })),
          catchError(error => of(ProfileActions.createProfileFailure({ error })))
        )
      )
    )
  );

  deleteProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.deleteProfile),
      mergeMap(({ id }) =>
        this.profileService.deleteProfile(id).pipe(
          map(() => ProfileActions.deleteProfileSuccess({ id })),
          catchError(error => of(ProfileActions.deleteProfileFailure({ error })))
        )
      )
    )
  );

  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateProfile),
      mergeMap(({ id, profile }) =>
        this.profileService.updateProfile(id, profile).pipe(
          map(() => ProfileActions.updateProfileSuccess({ id, profile })),
          catchError(error => of(ProfileActions.updateProfileFailure({ error })))
        )
      )
    )
  );







}
