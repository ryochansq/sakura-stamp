import { Scenario } from '../../stores/talk';

const scenarioMiki: Scenario = {
  start: [
    {
      side: 'left',
      name: 'yagi',
      text: '今日の昼',
    },
    {
      side: 'left',
      name: 'yagi',
      text: 'ひじきを食べた',
    },
    {
      side: 'left',
      name: 'yagi',
      text: '八木美樹です',
    },
    {
      side: 'input',
      root: {
        shirangana: 'success',
        other: 'retry',
      },
    },
  ],
  success: [
    {
      side: 'left',
      name: 'yagi',
      text: 'ありがとうございます！',
    },
    {
      side: 'left',
      name: 'yagi',
      text: '中等部２年、副会長の八木美樹です！',
    },
    { side: 'input', root: {} },
  ],
  retry: [
    {
      side: 'left',
      name: 'yagi',
      text: '......もう１回いきますねー、',
    },
    {
      side: 'left',
      name: 'yagi',
      text: 'たこ焼きは',
    },
    {
      side: 'left',
      name: 'yagi',
      text: 'ソース少な目',
    },
    {
      side: 'left',
      name: 'yagi',
      text: '八木美樹です',
    },
    {
      side: 'input',
      root: {
        shirangana: 'success',
        other: 'failure',
      },
    },
  ],
  failure: [{ side: 'input', root: {} }],
};

export default scenarioMiki;
