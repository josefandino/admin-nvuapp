import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.scss'],
})
export class WordCounterComponent implements OnInit {

  @Input() textArea?: string;

  limit = 200;
  contador = 0;

  constructor() { }

  onKey(event){ this.contador = event.target.value.length; }

  ngOnInit() {}

}
