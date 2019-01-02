import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NearEarthObject, NearEarthObjectResponse } from './near-earth-object';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaNhatsService {

  constructor(private http: HttpClient) { }

  getAllNearEarthObjects(): Observable<NearEarthObject[]> {
    const neoUrl = 'https://ssd-api.jpl.nasa.gov/nhats.api';
    return this.http.get<NearEarthObjectResponse>(neoUrl)
      .pipe(
        map((response: NearEarthObjectResponse) => response.data)
      );
  }
}
