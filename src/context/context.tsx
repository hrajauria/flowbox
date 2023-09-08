import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { ImageDetailsAPIResponse } from "../types/ImageDetailsAPIResponse";
import { ImageLayoutEnum } from "../types/enum/ImageLayoutEnum";

export interface FlowboxState {
  images: ImageDetailsAPIResponse[];
  layout: ImageLayoutEnum;
  isLoading: boolean;
  error: any;
  pageNumber: number;
}

interface IFlowboxContext {
  state: FlowboxState;
  dispatch: Dispatch;
}

const FlowboxContext = createContext<IFlowboxContext | undefined>(undefined);

interface IFlowboxProviderProps {
  children: ReactNode;
  initialState: FlowboxState;
}

export type Dispatch = (action: Actions) => void;

export enum ActionTypes {
  Refresh_Images,
  Load_Images,
  Change_Layout,
}

type Actions =
  | {
      type: ActionTypes.Refresh_Images;
    }
  | {
      type: ActionTypes.Load_Images;
      payload: ImageDetailsAPIResponse[];
    }
  | {
      type: ActionTypes.Change_Layout;
      payload: ImageLayoutEnum;
    };

function reducer(state: FlowboxState, action: Actions) {
  const { type } = action;
  switch (type) {
    case ActionTypes.Load_Images: {
      const { payload } = action;
      return {
        ...state,
        images: payload,
      };
    }
    case ActionTypes.Refresh_Images: {
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        images: [],
      };
    }
    case ActionTypes.Change_Layout: {
      const { payload } = action;
      return {
        ...state,
        layout: payload,
      };
    }
  }
}

export function FlowboxProvider({
  children,
  initialState,
}: IFlowboxProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FlowboxContext.Provider value={{ state, dispatch }}>
      {children}
    </FlowboxContext.Provider>
  );
}

export const useFlowboxContext = () => {
  const context = useContext(FlowboxContext);
  if (context === undefined) {
    throw new Error("useFlowboxContext must be used within a FlowboxProvider");
  }
  return context;
};
