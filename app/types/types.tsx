export interface Data {
    items: string[];
  }

 export  interface ItemData {
    id: number;
    poster_path: string;
    original_title: string;
    release_date: string;
    vote_average: number;
    runtime: number;
    overview: string;
    genres: { name: string }[];
    title:string;
    spoken_languages:{name:string}[];
    production_countries: { name: string }[];
    popularity:number;
}

export interface ItemData2 {
  id: number;
  poster_path: string;
  original_title: string;
}

export interface ImportedRootState {
  items: {
    items: {
      results: ItemData2[];
    };
  };
}