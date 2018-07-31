/**
 * A TypeScript program with side-effects
 *
 * Adapted from Functional Programming in Scala listing 1.1
 **/

export class Coffee {
  readonly price: number = 2.99;
}

export class CreditCard {
  didCharge: boolean = false;

  charge(price: number) {
    console.log("Side effect! Charging the credit card...");
    this.didCharge = true;
  }
}

export class Cafe {
  buyCoffee(cc: CreditCard): Coffee {
    const cup = new Coffee();
    cc.charge(cup.price);
    return cup;
  }
}

