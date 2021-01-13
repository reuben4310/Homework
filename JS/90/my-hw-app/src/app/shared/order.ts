import { Item } from "./item";
import { Person } from "./person";

export interface Order {
   item: Item;
   person: Person;
   date:Date;

}
