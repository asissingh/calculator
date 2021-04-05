import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  year = 12;
  months = 5;
  exactAmount = '0';
  showResult = false;
  gadgets: any[] = [
    [
      'year',
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
    ],
    ['months', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  ];
  firstFormGroup: FormGroup = new FormGroup({
    Principal: new FormControl('', [Validators.required]),
    Interest: new FormControl('', [Validators.required]),
  });

  constructor(private pickerController: PickerController) {}

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            let year = value['col -0'].text;
            if (year == 'year') {
              this.year = 0;
            } else {
              this.year = year;
            }
            let months = value['col -1'].text;
            if (months == 'months') {
              this.months = 0;
            } else {
              this.months = months;
            }
          },
        },
      ],
      columns: this.getColumns(),
    };
    let picker = await this.pickerController.create(options);
    picker.present();
  }

  getColumns() {
    let columns = [];
    for (let i = 0; i < this.gadgets.length; i++) {
      columns.push({
        name: `col -${i}`,
        options: this.getColumnOptions(i),
      });
    }
    return columns;
  }
  getColumnOptions(columIndex: number) {
    let options = [];
    for (let i = 0; i < this.gadgets[columIndex].length; i++) {
      options.push({
        text: this.gadgets[columIndex][i],
        value: i,
      });
    }
    return options;
  }
  calculate() {
    let formValue = this.firstFormGroup.value;
    let finalInterest =(formValue.Principal *formValue.Interest *(this.year + this.months / 12)) / 100;
    let totalAmount = formValue.Principal + finalInterest;
    this.exactAmount = totalAmount.toFixed(2);
    this.showResult = true;
  }
}
