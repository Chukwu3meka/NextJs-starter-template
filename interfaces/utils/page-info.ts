interface PageInfoData {
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface PageInfo {
  home: PageInfoData;
  // [key: string]: PageInfoData;
}
