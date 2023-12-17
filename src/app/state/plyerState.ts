export enum StateStatus{
  LOADING,
  LOADED,
  ERROR
}


export interface DataState<Type>{
  dataStateStatus:StateStatus;
  dataState?:Type;
  dataStateError?:string;
}

