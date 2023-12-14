
// Create a class for a deck of cards with:
//  - A method for creating a new deck of cards
//  - An empty deck that can be filled or refreshed
//  - Another method to shuffle   math.random()
//  - And a method to draw (.pop) a card.     .pop() for taking last element of array and .unshift() for taking the first element of an array 
//If you create a new deck, it should restart the deck



//create a method to know if a certain card is still in the deck. returns boolean value - done
// How does JS runtime handle comparing object??


import { Card } from "./card.js";
import { Hand } from "./hand.js";

// const _ = require('lodash');


let cardSuits = ['Hearts','Clubs','Spades','Diamonds']
let cardValues = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']

class DeckOfCards {
    
    constructor(deck) {
        this.deck = [];
    }
      
    createADeck(cardSuits, cardValues) {
        for (let suit of cardSuits) {
            for (let value of cardValues) {
                this.deck.push(new Card(suit, value))
            }
        }
        return this.deck;
    }

    shuffle() {
        let counter = this.deck.length, placeholder, i;

        while (counter){
            i = Math.floor(Math.random() * counter--);
            placeholder = this.deck[counter]  
            this.deck[counter] = this.deck[i];
            this.deck[i] = placeholder;
        }
        return this.deck;
    }

    drawFiveCards() {
        let hand = [];
        while (hand.length < 5) {
            hand.unshift(this.deck.pop());
        } 
        return hand;
    }

    drawRandomCard() {
        if (!this.deck.length) {
            return false;
        }
        const cardIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(cardIndex, 1)[0];
      }

    isCardStillInDeck(index) {
        for (let i = 0; i < this.deck.length; i++) {
            if (JSON.stringify(this.deck[i]) === JSON.stringify(index)){
                return true;
            }
        }
        return false;
    }

};

let deck1 = new DeckOfCards();
deck1.createADeck(cardSuits,cardValues)

deck1.shuffle();
console.log(deck1.drawRandomCard());
console.log("The cards in your hand are: ", deck1.drawFiveCards());
console.log(deck1.isCardStillInDeck({ suit: 'Diamonds', value: 'Queen' }));

// let deck2 = new DeckOfCards();
// deck2.createADeck(cardSuits,cardValues)
// console.log(deck2);