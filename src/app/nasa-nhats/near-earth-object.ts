import { ListItem } from '../features/list/list-item.interface';

export interface Signature {
  source: string;
  version: string;
}

export interface MinDv {
  dv: string;
  dur: string;
}

export interface MinDur {
  dv: string;
  dur: string;
}

export interface NearEarthObject extends ListItem {
  min_size: string;
  occ: string;
  n_via_traj: string;
  min_dv: MinDv;
  radar_snr_a: string;
  obs_mag: string;
  orbit_id: string;
  h: string;
  obs_flag: string;
  obs_end: string;
  min_dur: MinDur;
  radar_snr_g: string;
  radar_obs_a: string;
  obs_start: string;
  radar_obs_g: string;
  fullname: string;
  des: string;
  max_size: string;
}

export interface NearEarthObjectResponse {
  count: string;
  signature: Signature;
  data: NearEarthObject[];
}
