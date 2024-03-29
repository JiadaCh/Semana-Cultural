import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {routeConfig} from "./routes";
import {provideProtractorTestingSupport} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideHttpClient(withFetch()),provideProtractorTestingSupport()]
};
