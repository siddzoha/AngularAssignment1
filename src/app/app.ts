import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [NgFor, Header, Footer]
})
export class App {
  cards: string[] = [
    'card_2.png',
    'card_3.png',
    'card_4.png',
    'card_5.png',
    'card_6.png',
    'card_7.png',
  ];

  sortCards() {
    this.cards.sort();
  }

  reverseCards() {
    this.cards.reverse();
  }

  shuffleCards() {
    const newCards = [...this.cards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    this.cards = newCards;
  }
}
