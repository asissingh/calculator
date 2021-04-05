import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  input = '';
  FinalOutPut = '';
  find = false;
  constructor() {}

  num(n) {
    this.input += n;
  }

  closeOne() {
    let b = this.input.length - 1;
    this.input = this.input.slice(0, b);
  }
  clearAll() {
    this.input = '';
    this.FinalOutPut = '';
    this.find = false;
  }
  FinalAll() {
    let b = '';
    for (let i = 0; i < this.input.length; i++) {
      if (this.input[i] == '×') {
        b += '*';
      } else if (this.input[i] == '^') {
        b += '**';
      } else if (this.input[i] == '÷') {
        b += '/';
      } else {
        b += this.input[i];
      }
    }
    this.FinalOutPut = eval(b);
  }

  operators(n) {
    let b = '';
    let last = this.input[this.input.length - 1];
    if (
      last == '+' ||
      last == '-' ||
      last == '×' ||
      last == '÷' ||
      last == '^'
    ) {
      if(n == "%"){
        b = this.input.slice(0, this.input.length - 1);
        let d = +eval(b);
      this.input = d / 100 + '';
      }
      else{
      last.replace('÷', '/');
      b = this.input.slice(0, this.input.length - 1);
      b += n;
      this.input = b;}
    } else if (n == '%') {
      let d = +eval(this.input);

      this.input = d / 100 + '';
    } else {
      this.input += n;
      ``;
    }
    this.find = true;
  }
}
