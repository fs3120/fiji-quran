import { RAPI } from ".";
import { IVerses } from "./verses";

export interface ISurah {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      en: string;
      id: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  revelation: {
    arab: string;
    en: string;
    id: string;
  };
  tafsir: {
    id: string;
  };
}

export interface ISurahDetail extends ISurah {
  verses: IVerses[];
}

export interface RAPISurah extends RAPI {
  data: ISurah[];
}

export interface RAPISurahDetail extends RAPI {
  data: ISurahDetail;
}
