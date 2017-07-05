import { Gender } from "../enums/gender.enum";

export class Hero {
  id: number;
  name: string;
  gender: Gender;
  birthdate:Date;
  salary:number;
}