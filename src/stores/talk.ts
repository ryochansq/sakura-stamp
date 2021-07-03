/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Message = {
  side: 'left' | 'right';
  name: string;
  isStamp: boolean;
  text: string;
  id?: number;
  time?: string;
};

export interface TalkState {
  name: string;
  messages: Message[];
  // scenario: {
  //   [string]: ;
  // }
}

const initialState: TalkState = {
  name: '八木美樹',
  messages: [],
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
      action.payload.time = '20:38';
      // TODO: time追加処理
      state.messages.push(action.payload);
    },
  },
});

// export const { actions } = talkSlice;
