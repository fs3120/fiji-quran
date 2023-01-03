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

interface SuratDetailBase {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

export interface RAPISuratDetail extends SuratDetailBase {
  status: boolean;
  ayat: RAPIAyat[];
  surat_selanjutnya: SuratDetailBase;
  surat_sebelumnya: boolean;
}
