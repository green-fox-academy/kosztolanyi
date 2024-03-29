'use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, ink: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = ink;
  }

  use(amount: number): void {
    if (this.inkAmount >= amount) {
      this.inkAmount -= amount;
    } else {
      this.inkAmount = 0;
    }
  }
}

let pen1: Sharpie = new Sharpie('blue', 20);
console.log(pen1);

pen1.use(10);
console.log(pen1);

pen1.use(30);
console.log(pen1);

export {Sharpie};