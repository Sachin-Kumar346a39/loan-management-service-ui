import { LoanInfo } from './../loan-info.model';
import { TestBed, async, inject } from '@angular/core/testing';
import { ViewLoanService } from './view-loan.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ViewLoanService', () => {
  let service: ViewLoanService;
  let httpMock: HttpTestingController;

  let lms_loan_base_url = environment.lms_loan_base_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [LoanInfo]
    });
    service = TestBed.inject(ViewLoanService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return posts as an Observable`, async(inject([HttpTestingController, ViewLoanService],
    () => {

      let POST_URL = lms_loan_base_url+'/api/v1/loan/searchLoan'
      const loanData = [
        {
          "loanId": 11,
          "borrowerName": "Kumar",
          "addressLine1": "272",
          "addressLine2": "Hartnell",
          "city": "Sacramento",
          "zip": 95825,
          "state": "ca",
          "loanNumber": "1234AE",
          "loanAmount": 12346,
          "loanTerm": 3.5,
          "lienID": "123AT",
          "lienType": "Mortgage",
          "legalDescription": "Block d, City of Sacramento"
        }
      ];
      let loanInfo = new LoanInfo;
      service.searchLoan(loanInfo)
        .subscribe((data: any) => {
          expect(data.length).toBe(1);
        });

      let req = httpMock.expectOne(POST_URL);
      expect(req.request.method).toBe("POST");

      req.flush(loanData);
      httpMock.verify();

    })));
});
