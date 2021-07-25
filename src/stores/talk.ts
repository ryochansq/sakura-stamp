/* eslint-disable no-param-reassign */
import moment from 'moment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    [stamp: string]: string;
  };
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
  currentUnit: string;
  index: number;
  score: number;
}

const initialState: TalkState = {
  name: '',
  messages: [],
  currentUnit: 'start',
  index: 0,
  score: 0,
};

export const talkSlice = createSlice({
  name: 'talk',
  initialState,
  reducers: {
    initGame: (state) => {
      state.name = initialState.name;
      state.messages = initialState.messages;
      state.currentUnit = initialState.currentUnit;
      state.index = initialState.index;
      state.score = initialState.score;
    },
    initScenario: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.messages = initialState.messages;
      state.currentUnit = initialState.currentUnit;
      state.index = initialState.index;
    },
    appendMessage: (state, action: PayloadAction<Message>) => {
      action.payload.id = state.messages.length;
      action.payload.time = moment().format('H:mm');
      state.messages.push(action.payload);
    },
    increment: (state) => {
      state.index += 1;
    },
    changeUnit: (state, action: PayloadAction<string>) => {
      if (action.payload === 'success') state.score += 1;
      state.currentUnit = action.payload;
      state.index = 0;
    },
  },
});

export const { initGame, initScenario, appendMessage, increment, changeUnit } =
  talkSlice.actions;
