import scenarioAttendance from './scenarios/attendance';
import scenarioMiki from './scenarios/miki';
import scenarioResult from './scenarios/result';

export const stamps = [
  'tehe',
  'nasuo',
  'dame',
  'shirangana',
  'sonnakoto',
  'gungun',
  'otome',
  'mukako',
  '9',
  '10',
  '11',
  '12',
] as const;

export type Stamps = typeof stamps[number];

export const scenarios = [scenarioMiki, scenarioAttendance, scenarioResult];

export const INTERVAL = 1900;
export const END_INTERVAL = 5000;

export const ENTER_TIMEOUT = 2900;
export const ENTER_DELAY = 2000;
export const EXIT_TIMEOUT = 800;
