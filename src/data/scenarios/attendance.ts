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
          text: '中等部３年、白鳥沙南！',
        },
        {
          side: 'input',
          root: {
            tehe: 'kokona',
          },
          defaultRoot: 'failure',
        },
      ],
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
            nasuo: 'neo',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    neo: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '中等部２年、佐藤愛桜！',
        },
        {
          side: 'input',
          root: {
            sonnakoto: 'miku',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    miku: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '田中美空！',
        },
        {
          side: 'input',
          root: {
            dame: 'miko',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    miko: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '戸高美湖！',
        },
        {
          side: 'input',
          root: {
            gungun: 'miki',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    miki: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '八木美樹！',
        },
        {
          side: 'input',
          root: {
            shirangana: 'yume',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    yume: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '中等部１年、野崎結愛！',
        },
        {
          side: 'input',
          root: {
            otome: 'sakia',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    sakia: {
      states: [
        {
          side: 'left',
          name: 'hayashi',
          text: '小等部６年、木村咲愛！',
        },
        {
          side: 'input',
          root: {
            mukako: 'success',
          },
          defaultRoot: 'failure',
        },
      ],
    },
    success: { states: [{ side: 'end' }] },
    failure: { states: [{ side: 'end' }] },
  },
};

export default scenarioAttendance;
