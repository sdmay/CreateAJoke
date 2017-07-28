import { Component, OnInit, HostListener } from '@angular/core';
import {Article} from '../shared/article';
import { DatePipe } from '@angular/common';
import {Directive, Renderer2} from '@angular/core';
import {ElementRef} from '@angular/core'






@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
articles: Article[];
today: number = Date.now();
  constructor() {
    this.articles = [
      new Article('What did the cheese say when it looked in the mirror?', 'NONE', 'pooo', this.today),
      new Article('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)', 'NONE', this.today),
      new Article('A kid threw a lump of cheddar at me', 'NONE', 'PUKHJGHFF', this.today),
      new Article('What kind of cheessdfsdgadfhadhdshfshsgh', 'NONE', 'jnzxnckjzxncjzx', this.today),
      new Article('What kind of hadfgadfgadgs gwradhha ryhaeherhe rha erha e?', 'Mask-a-pony (Mascarpone)', 'NONE', this.today),
      new Article('gae rhhaer h aerhaer haerha eha ehhe?', 'Mask-a-pony (Mascarpone)', 'NONE', this.today),
      new Article(' WGAWG AERGAE RGASDGSGSFGDFGA?', 'NONE', 'jnzxnckjzxncjzx', this.today),
      new Article('gfdfgdfgdfgdfgadfhtrhbdgertwrtewrtwerwe?', 'Mask-a-pony (Mascarpone)', 'NONE', this.today),
    ];

  }

  ngOnInit() {
  }

}
