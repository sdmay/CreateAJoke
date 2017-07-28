export class Article {
  public title: string;
  public image: string;
  public words: string;
  public dater: number;
  constructor(title: string, image: string, words: string, dater: number) {
    this.title = title;
    this.image = image;
    this.words = words;
    this.dater = dater;
  }
}
