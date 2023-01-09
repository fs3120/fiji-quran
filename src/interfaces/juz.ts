import { RAPI } from ".";
import { IVerses } from "./verses";

export interface RAPIJuz extends RAPI {
  data: {
    juz: number;
    juzStartSurahNumber: number;
    juzEndSurahNumber: number;
    juzStartInfo: string;
    juzEndInfo: string;
    totalVerses: number;
    verses: IVerses[];
  };
}
