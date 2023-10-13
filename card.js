//What are the properties of a card...
//Does a card need to do anything by itself or behave a certain way ...methods?
//Should my singleCard method go in this class?



 class Card {

    constructor(cardSuits, cardValues) {
        this.cardSuits = cardSuits;
        this.cardValues = cardValues;
    }
}

let card1 = new Card(['Hearts','Clubs','Spades','Diamonds'], ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']);
console.log(card1);

export {Card};