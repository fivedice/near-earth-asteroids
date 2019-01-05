export interface NasaNhatsRequest {
  deltaV: number;
  tripDays: number;
  launchWindow: string;
  stayDays: number;
  magnitude?: number;
  orbitConditionCode?: number;
  designation?: string;
  plot?: boolean;
}
