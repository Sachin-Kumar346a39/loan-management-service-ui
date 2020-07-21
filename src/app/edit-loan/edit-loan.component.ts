import { Component, OnInit } from '@angular/core';
import { LoanInfo } from '../loan-info.model';
import { NotificationService } from '../services/notification.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EditLoanService } from '../services/edit-loan.service';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
  loanInfoModel: LoanInfo = new LoanInfo();
  constructor(public activatedRoute: ActivatedRoute, private loanInfo: LoanInfo, private notifyService: NotificationService, private _location: Location, private editLoanService: EditLoanService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        
        this.loanInfoModel = JSON.parse(params["loanInfo"]);
      });

  }

  updateLoan() {
    if (confirm("Are you sure to Update Loan? ")) {

      this.editLoanService.editLoan(this.loanInfoModel).subscribe(
        (data) => {

          this.notifyService.showSuccess("Loan Updated Successfully for Loan#: " + this.loanInfoModel.loanNumber, "");
          this.loanInfoModel = new LoanInfo();
        },
        (error) => {
          this.notifyService.showError("Loan Info could not be updated for Loan#: " + this.loanInfoModel.loanNumber, "");

        })
    }
  }

  doCancel() {
    this.router.navigate(['viewloan'])
  }
}

