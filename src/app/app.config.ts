import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ProfileEffect} from "./ngrx/profile/profile.effect";
import {profileReducer} from "./ngrx/profile/profile.reducer";


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideEntityData(entityConfig, withEffects()), provideStore({"profile":profileReducer}), provideEffects(ProfileEffect), provideHttpClient(), provideAnimationsAsync()]
};
