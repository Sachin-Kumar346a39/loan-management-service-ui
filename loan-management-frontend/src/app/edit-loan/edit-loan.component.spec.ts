import { EditLoanService } from './../services/edit-loan.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoanComponent } from './edit-loan.component';
import { ToastrModule } from 'ngx-toastr';
import { LoanInfo } from '../loan-info.model';

import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const editLoanServiceStub = {
  editLoan() {
    return of([
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
    ])
  }
};

const fakeActivatedRoute = {
  queryParams: { data: {} }
};

describe('EditLoanComponent', () => {
  let component: EditLoanComponent;
  let fixture: ComponentFixture<EditLoanComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [EditLoanComponent],
      providers: [LoanInfo,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: EditLoanService, useValue: editLoanServiceStub }
      ],
      imports: [
        ToastrModule.forRoot(),
        FormsModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('clicking cancel button should route to viewloan page', async(() => {
    component.doCancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['viewloan']);
  }));

  xit('clicking add button should successfully add loan', async(() => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.updateLoan();
    expect(component.updateLoan).toHaveBeenCalled;
  }));

});
