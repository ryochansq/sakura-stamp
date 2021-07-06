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

export type Scenario = {
  units: {
    [name: string]: Unit;
  };
  interrupted: {
    [name: string]: string;
  };
};

export type Unit = (Message | Input)[];

export interface TalkState {
  name: string;
  messages: Message[];
  currentUnit: string;
  index: number;
}

const initialState: TalkState = {
  name: '八木美樹',
  messages: [],
  currentUnit: 'start',
  index: 0,
};

export const talkSlice = createSlice({
  name: 'talk',
  initialState,
  reducers: {
    reset: (state) => {
      state.messages = [];
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
      state.currentUnit = action.payload;
      state.index = 0;
    },
  },
});

export const { reset, appendMessage, increment, changeUnit } =
  talkSlice.actions;
