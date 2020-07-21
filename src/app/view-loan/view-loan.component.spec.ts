import { ViewLoanService } from './../services/view-loan.service';
import { LoanInfo } from './../loan-info.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { ViewLoanComponent } from './view-loan.component';
import { of } from 'rxjs';

const viewLoanServiceStub = {
  searchLoan() {
    return of([
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
    ])
  }
};
describe('ViewLoanComponent', () => {
  let component: ViewLoanComponent;
  let fixture: ComponentFixture<ViewLoanComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]), HttpClientTestingModule
      ],
      providers: [LoanInfo, { provide: Router, useValue: mockRouter },
        { provide: ViewLoanService, useValue: viewLoanServiceStub }],
      declarations: [ViewLoanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clicking edit button should successfully go to edit loan page', async(() => {
    component.editLoan();
    expect(component.editLoan).toHaveBeenCalled;
  }));

  it('clicking Search button should successfully search loan details', async(() => {
    component.searchLoan();
    expect(component.searchLoan).toHaveBeenCalled;
  }));

});
