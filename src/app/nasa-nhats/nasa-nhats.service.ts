import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NearEarthObject, NearEarthObjectResponse } from './near-earth-object';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NasaNhatsRequest } from './nasa-nhats-request';

@Injectable({
  providedIn: 'root'
})
export class NasaNhatsService {
  private readonly neoUrl = 'https://ssd-api.jpl.nasa.gov/nhats.api';

  constructor(private http: HttpClient) { }

  getAllNearEarthObjects(): Observable<NearEarthObject[]> {
    return this.get(this.neoUrl);
  }

  getFilteredNearEarthObjects(filter: NasaNhatsRequest): Observable<NearEarthObject[]> {
    const params: string[] = [];
    Object.keys(filter).forEach(
      (key) => {
        switch (key) {
          case 'deltaV':
            params.push(`dv=${filter.deltaV}`);
            break;
          case 'tripDays':
            params.push(`dur=${filter.tripDays}`);
            break;
          case 'launchWindow':
            params.push(`launch=${filter.launchWindow}`);
            break;
          case 'stayDays':
            params.push(`stay=${filter.stayDays}`);
            break;
          case 'magnitude':
            params.push(`h=${filter.magnitude}`);
            break;
          case 'oribitConditionCode':
            params.push(`occ=${filter.orbitConditionCode}`);
            break;
        }
      }
    );
    return this.get(`${this.neoUrl}?${params.join('&')}`);
  }

  private get(url: string): Observable<NearEarthObject[]> {
    return this.http.get<NearEarthObjectResponse>(url)
      .pipe(
        map((response: NearEarthObjectResponse) => response.data)
      );
  }
}
