/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Message = {
  id?: number;
  side: 'left' | 'right';
  name: string;
  isStamp: boolean;
  text: string;
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
  name: 'さくら学院スタンプ',
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
      state.messages.push(action.payload);
    },
  },
});

// export const { actions } = talkSlice;
