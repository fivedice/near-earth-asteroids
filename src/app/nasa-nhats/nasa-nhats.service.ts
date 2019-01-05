import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NearEarthObject, NearEarthObjectResponse } from './near-earth-object';
import { NearEarthObjectDetails } from './near-earth-object-details';
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

  getFilteredNearEarthObjects(request: NasaNhatsRequest): Observable<NearEarthObject[]> {
    const params = this.parseRequest(request);
    return this.get(`${this.neoUrl}?${params}`);
  }

  getDetailsForNearEarthObject(request: NasaNhatsRequest, neo: NearEarthObject): Observable<NearEarthObjectDetails> {
    const apiRequest = {
      ...request,
      designation: neo.des,
      plot: true
    };
    delete apiRequest.magnitude;
    delete apiRequest.orbitConditionCode;
    const params = this.parseRequest(apiRequest);
    return this.http.get<NearEarthObjectDetails>(`${this.neoUrl}?${params}`);
  }

  private get(url: string): Observable<NearEarthObject[]> {
    return this.http.get<NearEarthObjectResponse>(url)
      .pipe(
        map((response: NearEarthObjectResponse) => response.data)
      );
  }

  private parseRequest(request: NasaNhatsRequest): string {
    const params: string[] = [];
    Object.keys(request).forEach(
      (key) => {
        switch (key) {
          case 'deltaV':
            params.push(`dv=${request.deltaV}`);
            break;
          case 'tripDays':
            params.push(`dur=${request.tripDays}`);
            break;
          case 'launchWindow':
            params.push(`launch=${request.launchWindow}`);
            break;
          case 'stayDays':
            params.push(`stay=${request.stayDays}`);
            break;
          case 'magnitude':
            params.push(`h=${request.magnitude}`);
            break;
          case 'oribitConditionCode':
            params.push(`occ=${request.orbitConditionCode}`);
            break;
          case 'designation':
            params.push(`des=${request.designation}`);
            break;
          case 'plot':
            params.push(`plot=${request.plot}`);
            break;
        }
      }
    );
    return params.join('&');
  }
}
