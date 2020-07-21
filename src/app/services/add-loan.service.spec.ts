import { LoanInfo } from './../loan-info.model';
import { TestBed, async, inject } from '@angular/core/testing';

import { AddLoanService } from './add-loan.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('AddLoanService', () => {
  let service: AddLoanService;
  let httpMock: HttpTestingController;
  let lms_loan_base_url = environment.lms_loan_base_url;;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [LoanInfo]
    });
    service = TestBed.inject(AddLoanService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return posts as an Observable`, async(inject([HttpTestingController, AddLoanService],
    () => {

      let POST_URL = lms_loan_base_url+'/api/v1/loan/addLoan'
      const postLoan = [
        {
          "borrowerName": "Robert Jr.",
          "addressLine1": "714 N VINE",
          "addressLine2": "ST",
          "city": "ANAHEIM",
          "state": "CA",
          "zip": "92805",
          "loanAmount": "15000",
          "loanTerm": "2.5",
          "lienID": "ABC123",
          "lienType": "Mortgage",
          "legalDescription": "ABCD",
          "loanNumber": "123456"
        }
      ];
      let loanInfo = new LoanInfo;
      service.addLoan(loanInfo)
        .subscribe((data: any) => {
          expect(data.length).toBe(1);
        });

      let req = httpMock.expectOne(POST_URL);
      expect(req.request.method).toBe("POST");

      req.flush(postLoan);
      httpMock.verify();

    })));
});
