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
}

const initialState: TalkState = {
  name: '',
  messages: [],
};

export const talkSlice = createSlice({
  name: 'talk',
  initialState,
  reducers: {
    initGame: (state) => {
      state.name = initialState.name;
      state.messages = initialState.messages;
    },
    initScenario: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.messages = initialState.messages;
    },
    appendMessage: (state, action: PayloadAction<Message>) => {
      action.payload.id = state.messages.length;
      action.payload.time = moment().format('H:mm');
      state.messages.push(action.payload);
    },
  },
});

export const { initGame, initScenario, appendMessage } = talkSlice.actions;
