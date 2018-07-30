export interface ToastElement extends HTMLDivElement {
  hide: () => void;
}

export type Toast = {
  title: string;
  text: string;
  type: ToastType;
  icon: string;
  timeout: number;
  onClick: () => void;
}

export enum ToastType {
  Info = 1,
  Success = 2,
  Warning = 3,
  Error = 4
}
