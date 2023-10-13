
// Create a class with:
//  - A method for creating a new deck of cards
//  - An empty deck that can be filled or refreshed
//  - Another method to shuffle   math.random()
//  - And a method to draw (.pop) a card.     .pop() for taking last element of array and .unshift() for taking the first element of an array 
//If you create a new deck, it should restart the deck

//  have a convo about key value pairs 
//  Have a convo about classes and how they are created

//what properties should a deck of cards have
//what do we want it to do? methods

import {Card} from "/Users/user2020/projects/deck-of-cards/card"


class DeckOfCards {

    constructor(deck) {
       this.deck = []; 
       

       for (let loopingThruSuits = 0; loopingThruSuits < cardSuits.length; loopingThruSuits++) { 
        for (let loopingThruValues = 0; loopingThruValues < cardValues.length; loopingThruValues++) {
            let singleCard = new Card (cardSuits[loopingThruSuits] + cardValues[loopingThruValues])
            console.log(singleCard)
             //this is a string. reformat this as an object
            // deck.push(singleCard)
            console.log(`The ${cardValues[loopingThruValues]} of ${cardSuits[loopingThruSuits]} is card number ${deck.length}`)
            }
        }
    }
}

const deck1 = new DeckOfCards();

// console.log(deck1.deck)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// let deckOfCards = () => {
    // let cardSuits = ['Hearts','Clubs','Spades','Diamonds']  //maybe change these hardcoded values from an array of strings to an object. What does an oject for a card look like?
    // let cardValues = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'] 
    // let deck = [];

    // queenOfhearts = {
    //     "suit" : "hearts",
    //     "value" : "queen"
    // }


    
    // for (let loopingThruSuits = 0; loopingThruSuits < cardSuits.length; loopingThruSuits++) { 
    //     for (let loopingThruValues = 0; loopingThruValues < cardValues.length; loopingThruValues++) {
    //         let singleCard = cardSuits[loopingThruSuits] + cardValues[loopingThruValues] //this is a string. reformat this as an object
    //         deck.push(singleCard)
    //         console.log(`The ${cardValues[loopingThruValues]} of ${cardSuits[loopingThruSuits]} is card number ${deck.length}`)
    //     }
    // }
    // console.log(`There are ${deck.length} cards in this deck`)
//     return deck;
//}
    
    
    // shuffle() {


    // }
        
    //     let deal = () => {
    //         let playersHand = [];
    //         // deal 7 cards to a players hand
    //         while (playersHand.length < 7){
    //         playersHand.push(deck.unshift())
    //         console.log(playersHand)
    
    //     return playersHand;
    // }

    // newDeck = new deckOfCards;
    
// console.log(playersHand)
// deckOfCards()
// console.log(deck)