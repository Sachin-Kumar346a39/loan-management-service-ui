import { HttpClient } from '@angular/common/http';
import { LoanInfo } from './../loan-info.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewLoanService {
  lms_loan_base_url = environment.lms_loan_base_url;
  SEARCH_LOAN_URL: string = this.lms_loan_base_url+'/api/v1/loan/searchLoan';
  constructor(private httpClient: HttpClient, loanInfo: LoanInfo) { }

  searchLoan(data: any): Observable<any> {

    return this.httpClient.post(this.SEARCH_LOAN_URL, data)
  }
}
