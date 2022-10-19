export type itemsT = {
  id: number;
  title: string;
  type: number[];
  variants: string[];
  correct: number;
};

export type emptyCardP = {
  id: number;
  title: string;
  time: number;
  numberOfQ: number;
  lng: string;
  type: number;
};

export type lngsT = {
  en: {
    nativeName: string;
    geName: string;
  };
  ge: {
    nativeName: string;
    geName: string;
  };
};
