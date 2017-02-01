export interface Lecture {
  title: string;
  date: Date;
  description: string;
  downloads: {
    presentation: string;
    manual: string;
  };
}
