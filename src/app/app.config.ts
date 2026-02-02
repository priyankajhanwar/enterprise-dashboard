import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';
import { InMemoryDataService } from './mocks/data.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(
      withInterceptorsFromDi(),
    ), {
      provide: HttpClientInMemoryWebApiModule,
      useValue: HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
      multi: true
    }]
};
