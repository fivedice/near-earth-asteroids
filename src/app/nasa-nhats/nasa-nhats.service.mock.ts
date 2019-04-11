import { NasaNhatsRequest } from './nasa-nhats-request';
import { NearEarthObject } from './near-earth-object';

export class MockNasaNhatsService {
  getAllNearEarthObjects() {}

  getFilteredNearEarthObjects(request: NasaNhatsRequest) {}

  getDetailsForNearEarthObject(request: NasaNhatsRequest, neo: NearEarthObject) {}
}
