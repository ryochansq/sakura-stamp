import { Scenario } from '../../stores/talk';

const scenarioResult: Scenario = {
  name: '結果発表',
  units: {
    start: {
      states: [
        {
          side: 'left',
          name: 'sana', // TODO: 結果を誰に言わせる？ランダムにする？
          text: '結果発表！',
        },
        {
          side: 'left',
          name: 'sana',
          text: 'あなたは......',
        },
        {
          side: 'left',
          name: 'sana',
          text: '「ガチ父兄」です！', // TODO: scoreに応じて結果を変える
        },
        {
          side: 'left',
          name: 'sana',
          text: 'もう一度あそぶ', // TODO: もう一度あそぶボタンを表示して、押されたらinitGameする
        },
        {
          side: 'left',
          name: 'sana',
          text: 'Twitterで共有する', // TODO: 共有ボタンを表示して、押されたらTwitter画面へ
        },
        {
          side: 'input',
          root: {},
          defaultRoot: '',
        },
      ],
    },
  },
};

export default scenarioResult;
