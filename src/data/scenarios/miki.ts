import { Scenario } from '../../stores/talk';

const scenarioMiki: Scenario = {
  name: '八木美樹',
  units: {
    start: {
      states: [
        {
          side: 'left',
          name: 'miki',
          text: '今日の昼',
        },
        {
          side: 'left',
          name: 'miki',
          text: 'ひじきを食べた',
        },
        {
          side: 'left',
          name: 'miki',
          text: '八木美樹です',
        },
        {
          side: 'input',
          root: {
            shirangana: 'success',
          },
          defaultRoot: 'retry',
        },
      ],
      interrupted: 'interrupted',
    },
    interrupted: {
      states: [
        {
          side: 'left',
          name: 'miki',
          text: '最後まで言わせてください笑',
        },
        {
          side: 'left',
          name: 'miki',
          text: '今日の昼',
        },
        {
          side: 'left',
          name: 'miki',
          text: 'ひじきを食べた',
        },
        {
          side: 'left',
          name: 'miki',
          text: '八木美樹です',
        },
        {
          side: 'input',
          root: {
            shirangana: 'success',
          },
          defaultRoot: 'retry',
        },
      ],
      interrupted: 'failure',
    },
    retry: {
      states: [
        {
          side: 'left',
          name: 'miki',
          text: '......もう１回いきますねー、',
        },
        {
          side: 'left',
          name: 'miki',
          text: 'たこ焼きは',
        },
        {
          side: 'left',
          name: 'miki',
          text: 'ソース少な目',
        },
        {
          side: 'left',
          name: 'miki',
          text: '八木美樹です',
        },
        {
          side: 'input',
          root: {
            shirangana: 'success',
          },
          defaultRoot: 'failure',
        },
      ],
      interrupted: 'failure',
    },
    success: {
      states: [
        {
          side: 'left',
          name: 'miki',
          text: 'ありがとうございます！',
        },
        {
          side: 'left',
          name: 'miki',
          text: '中等部２年、副会長の八木美樹です！',
        },
        { side: 'end' },
      ],
    },
    failure: { states: [{ side: 'end' }] },
  },
};

export default scenarioMiki;
