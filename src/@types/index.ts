export type itemsT = {
  id: number;
  title: string;
  type: number[];
  variants: string[];
  correct: number;
  audio?: string | undefined;
};

export type emptyCardP = {
  id: number;
  title: string;
  subtitle: string;
  time: number;
  numberOfQ: number;
  lng: string;
  type: number;
  navTitle: string;
};

export type emptyMainCardT = {
  id: number;
  title: string;
  lng: string;
  navigate: string;
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
  ru: {
    nativeName: string;
    geName: string;
  };
};

export type TestT = {
  title: number;
  sub: number;
};

export interface quizSliceI {
  items: itemsT[];
  testItems: itemsT[];
  step: number;
  active: boolean;
  cardId: number;
  variant: number[];
}
