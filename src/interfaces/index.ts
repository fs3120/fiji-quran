export interface RAPISurat {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

export interface RAPIAyat {
  id: number;
  surah: number;
  nomor: number;
  ar: string;
  tr: string;
  idn: string;
}

interface EDevQuranBase {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

interface TafsirBase {
  id: number;
  surah: number;
  ayat: number;
  tafsir: string;
}

export interface RAPISuratDetail extends EDevQuranBase {
  status: boolean;
  ayat: RAPIAyat[];
  surat_selanjutnya: EDevQuranBase | boolean;
  surat_sebelumnya: EDevQuranBase | boolean;
}

export interface RAPITafsirDetail extends EDevQuranBase {
  status: boolean;
  tafsir: TafsirBase[];
}
