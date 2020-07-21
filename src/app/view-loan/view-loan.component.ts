import { ViewLoanService } from './../services/view-loan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoanInfo } from '../loan-info.model';


@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {

  loanInfoInput: LoanInfo = new LoanInfo();
  flag = false
  found = false
  notfound = false

  constructor(private router: Router, private viewLoanService: ViewLoanService, private loanInfo: LoanInfo) { }

  ngOnInit(): void {

    this.clearForm();
  }


  searchLoan(): void {


    this.viewLoanService.searchLoan(this.loanInfoInput).subscribe(
      (data) => {
        if (data == null) {
          this.setNoDataFlag();
        }
        else {
          this.loanInfo = data;
          this.setDataFlag();
        }

      },
      (error) => {
        this.notfound = true
      })
  }

  clearForm(): void {
    this.flag = false
    this.notfound = false
  }

  setNoDataFlag(): void {
    this.flag = false
    this.notfound = true
  }

  setDataFlag(): void {
    this.flag = true
    this.found = true
    this.notfound = false
  }

  editLoan(): void {

    this.router.navigate(['/editloan'], { queryParams: { loanInfo: JSON.stringify(this.loanInfo) } });
  }

}
