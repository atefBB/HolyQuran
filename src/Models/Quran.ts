export interface QuranRoot {
  quran: Quran;
}
export interface Quran {
  sura: Sura[];
}

export interface Sura {
  index: string;
  name: string;
  aya: Aya[];
}

interface Aya {
  index: string;
  text: string;
}
