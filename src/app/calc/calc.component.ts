import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
  public loanamnt: number;
  public loanterm: number;
  public interest: number;

  public monthlyPayment = 0;
  public totalPayment = 0;
  public totalInterest = 0;

  constructor() {}


  ngOnInit(): void {}

  calculate() {
    var principal = this.loanamnt;
    var interest = this.interest / 100 / 12;
    var payments = this.loanterm;

    var z = Math.pow(1 + interest, payments);
    var monthly = (principal * z * interest) / (z - 1);
    if (
      !isNaN(monthly) &&
      monthly != Number.POSITIVE_INFINITY &&
      monthly != Number.NEGATIVE_INFINITY
    ) {
      this.monthlyPayment = Math.round(monthly * 1000) / 1000;
      this.totalPayment = Math.round(monthly * payments * 1000) / 1000;
      this.totalInterest =
        Math.round((monthly * payments - principal) * 1000) / 1000;
    } else {
      this.monthlyPayment = 0;
      this.totalPayment = 0;
      this.totalInterest = 0;
    }
  }
}
