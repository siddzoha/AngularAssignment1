import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [NgFor, HeaderComponent, FooterComponent]
})
export class App {
  cards: string[] = [
    'card_2.png', 'card_3.png','card_4.png','card_5.png','card_6.png',
  ];

  sortCards() {
    this.cards.sort();
  }

  reverseCards() {
    this.cards.reverse();
  }

  shuffleCards() {
    for ( let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[i], this.cards[j]];
    }
  }
}
