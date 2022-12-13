export type itemsT = {
  id: number;
  title: string;
  type: number[];
  variants: string[];
  correct: number;
  answered: boolean;
  audio?: string | undefined;
};

export type letterT = {
  id: number;
  lett: string;
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

export type favoriteT = {
  type: number;
};

export type itemT = {
  id: number;
  title: string;
  correct: number;
  variants: string[];
  type: number[];
  answered: boolean;
  choosenVariant: string;
  correctVariant: string;
};

export interface quizSliceI {
  items: itemsT[];
  testItems: itemsT[];
  incItems: itemT[];
  step: number;
  active: boolean;
  cardId: number;
  variant: number[];
  activeLink: boolean;
}

export interface ThemeState {
  theme: string;
}

type incAns = {
  id: number;
  incAns: number;
};
export interface cardI {
  favorite: itemsT[];
  progress: itemsT[];
  disable: boolean;
  correctAns: number;
  incorrectAns: incAns[];
  type: number | undefined;
}
