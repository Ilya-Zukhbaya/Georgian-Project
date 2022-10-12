export type itemsT = {
  id: number;
  title: string;
  type: number;
  variants: string[];
  correct: number;
};

export type emptyCardP = {
  id: number;
  title: string;
  subtitle: string;
  time: number;
  numberOfQ: number;
  lng?: string;
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
