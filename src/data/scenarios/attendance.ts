import { Scenario } from '../../stores/talk';

const scenarioAttendance: Scenario = {
  name: '森ハヤシ',
  units: {
    start: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '出席を取ります',
        },
        {
          side: 'left',
          name: 'hayashi',
          text: '中等部３年、',
        },
        {
          side: 'left',
          name: 'hayashi',
          text: '白鳥沙南！',
        },
        {
          side: 'input',
          root: {
            tehe: 'kokona',
            other: 'failure',
          },
        },
      ],
      interrupted: 'failure',
    },
    kokona: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '野中ここな！',
        },
        {
          side: 'input',
          root: {
            nasuo: 'success',
            other: 'failure',
          },
        },
      ],
      interrupted: 'failure',
    },
    success: { states: [{ side: 'end' }] },
    failure: { states: [{ side: 'end' }] },
  },
};

export default scenarioAttendance;
