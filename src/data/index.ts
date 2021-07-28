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
