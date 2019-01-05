export interface Signature {
  version: string;
  source: string;
}

export interface MinDv {
  dv: string;
  dur: string;
}

export interface MinDur {
  dv: string;
  dur: string;
}

export interface MinDvTraj {
  tid: string;
  dv_total: string;
  dur_total: string;
  dur_out: string;
  dur_at: string;
  dur_ret: string;
  launch: string;
  c3: string;
  v_dep_earth: string;
  dv_dep_park: string;
  vrel_arr_neo: string;
  vrel_dep_neo: string;
  vrel_arr_earth: string;
  v_arr_earth: string;
  dec_dep: string;
  dec_arr: string;
}

export interface MinDurTraj {
  tid: string;
  dv_total: string;
  dur_total: string;
  dur_out: string;
  dur_at: string;
  dur_ret: string;
  launch: string;
  c3: string;
  v_dep_earth: string;
  dv_dep_park: string;
  vrel_arr_neo: string;
  vrel_dep_neo: string;
  vrel_arr_earth: string;
  v_arr_earth: string;
  dec_dep: string;
  dec_arr: string;
}

export interface NearEarthObjectDetails {
  signature: Signature;
  fullname: string;
  orbit_id: string;
  h: string;
  min_size: string;
  max_size: string;
  size?: any;
  size_sigma?: any;
  occ: string;
  min_dv: MinDv;
  min_dur: MinDur;
  n_via_traj: number;
  obs_start: string;
  obs_end: string;
  obs_mag: string;
  obs_flag: string;
  radar_obs_a: string;
  radar_snr_a: string;
  radar_obs_g: string;
  radar_snr_g: string;
  plot_base64: string;
  computed: string;
  min_dv_traj: MinDvTraj;
  min_dur_traj: MinDurTraj;
}
