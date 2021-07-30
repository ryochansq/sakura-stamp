/* eslint-disable no-param-reassign */
import moment from 'moment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stamps } from '../data';

export type Message = {
  side: 'left' | 'right';
  name: string;
  text: string;
  isStamp?: boolean;
  id?: number;
  time?: string;
};

export type Input = {
  side: 'input';
  root: {
    [key in Stamps]?: string;
  };
  defaultRoot: string;
};

export type End = {
  side: 'end';
};

export type Scenario = {
  name: string;
  units: {
    [name: string]: Unit;
  };
};

export type Unit = {
  states: (Message | Input | End)[];
  interrupted?: string;
};

export interface TalkState {
  name: string;
  messages: Message[];
  score: number;
  changing: boolean;
}

const initialState: TalkState = {
  name: '',
  messages: [],
  score: 0,
  changing: true,
};

export const talkSlice = createSlice({
  name: 'talk',
  initialState,
  reducers: {
    initGame: (state) => {
      state.name = initialState.name;
      state.messages = initialState.messages;
      state.changing = false;
    },
    initScenario: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.messages = initialState.messages;
      state.changing = false;
    },
    appendMessage: (state, action: PayloadAction<Message>) => {
      action.payload.id = state.messages.length;
      action.payload.time = moment().format('H:mm');
      state.messages.push(action.payload);
    },
    addScore: (state) => {
      state.score += 1;
    },
    setChangingTrue: (state) => {
      state.changing = true;
    },
  },
});

export const {
  initGame,
  initScenario,
  appendMessage,
  addScore,
  setChangingTrue,
} = talkSlice.actions;
