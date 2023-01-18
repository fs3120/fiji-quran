import { RAPI } from ".";
import { IVerses } from "./verses";

export interface RAPIPage extends RAPI {
  data: {
    page: number;
    pageStartSurahNumber: number;
    pageEndSurahNumber: number;
    pageStartInfo: string;
    pageEndInfo: string;
    totalVerses: number;
    verses: IVerses[];
  };
}
