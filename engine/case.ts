export interface BirthInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
  second?: number;
  calendarType: string;
  useTrueSolarTime?: boolean;
  longitude?: number;
  latitude?: number;
  timeZone?: number;
}

export interface DestinyCase {
  id: string;
  name: string;
  gender: string;
  note?: string;
  birthInput: BirthInput;
  createdAt: string;
  updatedAt: string;
}