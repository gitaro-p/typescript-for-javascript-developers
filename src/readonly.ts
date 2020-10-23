export {};

class YugiohCard {
  constructor(public readonly owner: string) {}
}

let myYugiohCard = new YugiohCard('カワウソくん');
console.log(myYugiohCard.owner);
//myYugiohCard.owner = 'パグちゃん';
