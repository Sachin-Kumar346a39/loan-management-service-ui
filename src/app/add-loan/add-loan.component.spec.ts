import { NotificationService } from './../services/notification.service';
import { AddLoanService } from './../services/add-loan.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AddLoanComponent } from './add-loan.component';

import { ToastrModule } from 'ngx-toastr';
import { LoanInfo } from '../loan-info.model';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { of } from 'rxjs';

const addLoanServiceStub = {
  addLoan() {
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

const notificationServiceStub = {
  showSuccess() {
    return "Success"
  }
};

describe('AddLoanComponent', () => {
  let component: AddLoanComponent;
  let fixture: ComponentFixture<AddLoanComponent>;
  let mockRouter;
  let notificationService: NotificationService;


  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [AddLoanComponent],
      providers: [LoanInfo,
        { provide: Router, useValue: mockRouter },
        { provide: AddLoanService, useValue: addLoanServiceStub }, NotificationService,
        { provide: NotificationService, useValue: notificationServiceStub }],
      imports: [
        ToastrModule.forRoot(),
        FormsModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('clicking cancel button should route to viewloan page', async(() => {
    component.doCancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['viewloan']);
  }));

  it('clicking add button should successfully add loan', async(() => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.addLoan();
    expect(component.addLoan).toHaveBeenCalled;
  }));

});
