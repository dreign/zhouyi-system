'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ZiweiState, ZiweiAction } from './types';

const initialState: ZiweiState = {
  plate: null,
  activeTab: 'palace',
  activePalace: 0,
  showDizhiRelation: false,
  relationMode: null,
  liTaiJiMode: false,
  liTaiJiOrigin: null,
  reCenteredPlate: null,
  reCenterHistory: [],
  selectedYear: new Date().getFullYear(),
  daXianIndex: 0,
};

function ziweiReducer(state: ZiweiState, action: ZiweiAction): ZiweiState {
  switch (action.type) {
    case 'SET_PLATE':
      return { ...state, plate: action.payload };
    case 'SET_TAB':
      return { ...state, activeTab: action.payload };
    case 'SET_ACTIVE_PALACE':
      return { ...state, activePalace: action.payload };
    case 'TOGGLE_DIZHI_RELATION':
      return { ...state, showDizhiRelation: !state.showDizhiRelation };
    case 'SET_RELATION_MODE':
      return { ...state, relationMode: action.payload };
    case 'ENTER_LI_TAI_JI':
      return {
        ...state,
        liTaiJiMode: true,
        liTaiJiOrigin: action.payload.origin,
        reCenteredPlate: action.payload.reCenteredPlate,
        reCenterHistory: [...state.reCenterHistory, action.payload.reCenteredPlate],
      };
    case 'EXIT_LI_TAI_JI':
      return {
        ...state,
        liTaiJiMode: false,
        liTaiJiOrigin: null,
        reCenteredPlate: null,
        reCenterHistory: [],
      };
    case 'PUSH_RE_CENTER':
      return {
        ...state,
        reCenteredPlate: action.payload,
        reCenterHistory: [...state.reCenterHistory, action.payload],
      };
    case 'POP_RE_CENTER': {
      const history = [...state.reCenterHistory];
      history.pop();
      const prev = history[history.length - 1] || null;
      return {
        ...state,
        reCenteredPlate: prev,
        reCenterHistory: history,
        liTaiJiMode: history.length > 0,
        liTaiJiOrigin: history.length > 0 ? state.liTaiJiOrigin : null,
      };
    }
    case 'SET_SELECTED_YEAR':
      return { ...state, selectedYear: action.payload };
    case 'SET_DA_XIAN_INDEX':
      return { ...state, daXianIndex: action.payload };
    default:
      return state;
  }
}

interface ZiweiContextType {
  state: ZiweiState;
  dispatch: React.Dispatch<ZiweiAction>;
}

const ZiweiContext = createContext<ZiweiContextType | undefined>(undefined);

export function ZiweiProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ziweiReducer, initialState);
  return (
    <ZiweiContext.Provider value={{ state, dispatch }}>
      {children}
    </ZiweiContext.Provider>
  );
}

export function useZiwei() {
  const context = useContext(ZiweiContext);
  if (!context) {
    throw new Error('useZiwei must be used within a ZiweiProvider');
  }
  return context;
}
