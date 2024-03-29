"use strict";

import { Animal } from "./zoo";

class Mammal extends Animal {
  numberOfNipples: number;
  ifSweat: boolean;
  diet: string;

  constructor(name: string) {
    super(name);
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return "pushing out miniature crying gnomes";
  }
}
export { Mammal };
