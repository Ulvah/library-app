import { Booktype } from "./booktype";
import { Language } from "./language";

export class Book {
  public guid!: string;
  public isbn!: string;
  public title!: string;
  public writer!: string;
  public publisher!: string;
  public booktype!: Booktype;
  public language!: Language;
}
