import { HttpClient } from '@angular/common/http';
import { LoanInfo } from './../loan-info.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditLoanService {

  lms_loan_base_url = environment.lms_loan_base_url;
  EDIT_LOAN_URL: string = this.lms_loan_base_url+'/api/v1/loan/updateLoan/';
  constructor(private httpClient: HttpClient, private loanInfo: LoanInfo) { }

  editLoan(data: any): Observable<any> {

    return this.httpClient.post(this.EDIT_LOAN_URL + data.loanId, data)
  }

}
