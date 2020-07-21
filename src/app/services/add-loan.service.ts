import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoanInfo } from './../loan-info.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddLoanService {

  lms_loan_base_url = environment.lms_loan_base_url;
  ADD_LOAN_URL: string = this.lms_loan_base_url+'/api/v1/loan/addLoan';
  constructor(private httpClient: HttpClient, loanInfo: LoanInfo) { }

  addLoan(data: any): Observable<any> {

    return this.httpClient.post(this.ADD_LOAN_URL, data)
  }

}
